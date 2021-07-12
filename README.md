## GRAPHIN' TUNES

> WEBSITE! - https://graphin-tunes.herokuapp.com

Graphin' Tunes is a web application that gives you various beautiful and colorful insights on your listening tastes and preferences in a beautiful interface. It plots minimal graphs which you can use to analyze the melodies and the characteristics of your recently played songs. The web application is best if viewed on a laptop or a desktop, but it is responsive for smaller devices as well.

> The different features are danceability, valence, tempo, acousticness, speechiness, instrumentalness, liveness and mode (major or minor).

### WEB ROUTES / PAGES

There are 2 main routes or pages:

1. Overview
   - This page shows you the overall characteristics of your songs in a dash-board like interface by graphing various charts. It provides a top view of your type of music, with a indepth written explanation below.
2. Comparison
   - This page looks amazing and may really up your experience on your website. It is best viewed on a wide screen, preferably desktop or laptop. It provides an side-to-side comparison of your recently played songs, so you can see for yourself how the features add up and correlate. It shows

### An indepth understanding of the various audio features

- Danceability - It is a value from 0.0 to 1.0 and depicts how danceable your song is. Higher the danceability, more danceable the song.
- Tempo - It is the beats per minute of the song. It provides an estimate of how fast or slow the song it. Higher values are faster and lower values are slower.
  -Liveness - It is a measure of whether the song was conducted in a concert or somewhere live, or it was a studio creation. More the liveness, more stagy (not sure if that's a word) the song.
- Acoustiness - Pretty self explanatory. It is a value from 0.0 to 1.0 and delineates the amount of pure acousticness in the song.
- Speechiness - This one is also a value form 0.0 to 1.0 and gives us a estimate of whether the audio piece was a song or maybe a poem or a audiobook. Higher the value, more likely the audio piece will be a poem, audiobook or a sonnet.
- Valence - A value from 0.0 to 1.0. Delineates a estimate of how happy or euphoric your song is, higher the value more happy and cheerful the song, lower the value, the song tends to be more sad, angry or emotional.
- Mode - This is a categorical value, meaning it has only 2 values. Major and Minor. Songs in the minor mode tend to be more melancholic or mellow. Major songs tend to be bright, bold and confident.

### TECH-STACK

Built using modern technologies like

1. NodeJS - For the Back-end server-side code.
2. Spotify Authentication - For getting the user data and authenticating the Spotify account.
3. ChartJS - To plot the beautiful graphs on the website.
4. Some helper libraries like:
   - SpotifyWebApi - A wrapper for Spotify Auth.
   - Morgan - For dev logging.
   - DotENV - For handling env files for holding sensitive information.

### REQUIREMENTS

None! Just head to the link at the top and log in to the Spotify Account and enjoy the web app! That's it!

- If you don't have one account, head over to ***https://www.spotify.com/*** and create an account. Be sure to listen to a few different songs so that **Graphin' Tunes** can get the data to plot the graphs.

- **_IMPORTANT POINT - Be sure to listen to different songs of your liking and not repeat the same songs for a *much* better experience! After all, you wouldn't like all the graphs to have the same values, would you?😁_**

- If you want to see the code and play around with the code, just replace the process.env files with the specific values like YOUR spotify client_ID or YOUR secret client_ID etc.

### Just a note - Graphin Tunes asks for permission to access only 2 things:

    - Your email and name - To display a welcome message when you log in😄
    - Your recently played songs - To get the data to plot the beautiful graphs.

This application is a standalone project on its own and an idea I had for a long time, but it was also built as a final Project for CS50x, **Harvard's Quintessential Course** for the _Intellectuals of Computer Science and the Art of Programming._
