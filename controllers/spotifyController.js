const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.REDIRECT_URI_PROD; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// https://stackoverflow.com/q/1053843

const findMostFreqKey = (array) => {
  if (array.length === 0) return null;
  const modeMap = {};
  let maxEl = array[0];
  let maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};

const stateKey = "spotify_auth_state";

module.exports.spotifyLogin = function (req, res, next) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = "user-read-email user-read-recently-played";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
};

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri,
});

module.exports.spotifyCallback = function (req, res, next) {
  spotifyApi
    .authorizationCodeGrant(req.query.code)
    .then((token_data) => {
      spotifyApi.setAccessToken(token_data.body.access_token);
      spotifyApi.setRefreshToken(token_data.body.refresh_token);
      spotifyApi.getMe().then((userdata) => {
        const userData = {
          name: userdata.body.display_name,
          email: userdata.body.email,
        };
        req.session.user = userData;
      });
    })
    .then(() => {
      spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((song_data) => {
        const unique_song_data = [...Set(song_data)];
        if (unique_song_data.body.items.length === 0) {
          return next(
            new Error(
              "Data is not found!! Please listen to some music or turn off private mode in Settings!"
            )
          );
        }
        const songArr = [];
        const songIds = [];
        unique_song_data.body.items.forEach((el) => {
          const songInfo = {
            id: el.track.id,
            name: el.track.name,
            artists: el.track.artists,
            href: el.track.href,
            duration: el.track.duration_ms / 1000,
          };

          songIds.push(songInfo.id);
          songArr.push(songInfo);
        });

        spotifyApi.getAudioFeaturesForTracks(songIds).then((features_data) => {
          // OVERALL
          const individualFeatures = features_data.body.audio_features;
          individualFeatures.forEach((el, i) => {
            el.name = songArr[i].name;
            el.artists = songArr[i].artists[0].name;
          });

          // Copying data from individual features to object, as in the foreach loop data is mutated.
          const object = [...individualFeatures];

          let danceability = 0;
          let energy = 0;
          const key = [];
          let mode = 0;
          let speechiness = 0;
          let acousticness = 0;
          let instrumentalness = 0;
          let tempo = 0;
          let liveness = 0;
          let valence = 0;

          object.forEach((el) => {
            danceability += el.danceability;
            energy += el.energy;
            // The key is the scale, C or D or E
            key.push(el.key);
            // The mode is either major or minor
            mode += el.mode;
            speechiness += el.speechiness;
            acousticness += el.acousticness;
            instrumentalness += el.instrumentalness;
            tempo += el.tempo;
            liveness += el.liveness;
            valence += el.valence;
          });

          const overallFeatures = {
            danceability:
              Math.round((danceability / individualFeatures.length) * 100) /
              100,
            // Find max occurence of the key to find most played chord.
            key: findMostFreqKey(key),
            energy:
              Math.round((energy / individualFeatures.length) * 100) / 100,
            tempo: Math.round((tempo / individualFeatures.length) * 100) / 100,
            valence:
              Math.round((valence / individualFeatures.length) * 100) / 100,
            acousticness:
              Math.round((acousticness / individualFeatures.length) * 100) /
              100,
            mode: Math.round(mode / individualFeatures.length),
            liveness:
              Math.round((liveness / individualFeatures.length) * 100) / 100,
            speechiness:
              Math.round((speechiness / individualFeatures.length) * 100) / 100,
            instrumentalness:
              Math.round((instrumentalness / individualFeatures.length) * 100) /
              100,
          };
          // Re-usable request sessions
          req.session.overallFeatures = overallFeatures;
          req.session.individualFeatures = individualFeatures;

          res.redirect("/visualize");
        });
      });
    });
};
