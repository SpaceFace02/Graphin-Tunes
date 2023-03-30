# GRAPHIN' TUNES

**BUGFREE-LINK - https://graphin-tunes-tbij.onrender.com/** - may take a while to load as I'm on free tier.

 **ALTERNATE LINK - https://graphin-tunes.cyclic.app/** - no wait time, but slightly buggy.

Graphin' Tunes is a web application that gives you various **interactive** beautiful and colorful insights on your listening tastes and preferences in a beautiful interface. It plots minimal graphs which you can use to analyze the melodies and the characteristics of your recently played songs. The web application is best if viewed on a laptop or a desktop, but it is responsive for smaller devices as well.

> The different features are danceability, valence, tempo, acousticness, speechiness, instrumentalness, liveness, energy and mode (major or minor).

## WEB ROUTES / PAGES

There are 2 main routes or pages:

1. **Overview**
   - This page shows you the overall characteristics of your songs in a dash-board like interface by graphing various charts. It provides a top view of your type of music, with a indepth written explanation below.
2. **Comparison**
   - This page looks exciting and may really up your experience on this website. It is best viewed on a wide screen, preferably desktop or laptop. It provides an side-to-side comparison of your recently played songs, so you can see for yourself how the features add up and correlate. 

## An indepth understanding of the various audio features

- **Danceability** - It is a value from 0.0 to 1.0 and depicts how danceable your song is. Higher the danceability, more danceable the song.
- **Tempo** - It is the beats per minute of the song. It provides an estimate of how fast or slow the song it. Higher values are faster and lower values are slower.
- **Liveness** - It is a measure of whether the song was conducted in a concert or somewhere live, or it was a studio creation. More the liveness, more stagy (not sure if that's a word) the song.
- **Acoustiness** - Pretty self explanatory. It is a value from 0.0 to 1.0 and delineates the amount of pure acousticness in the song.
- **Speechiness** - This one is also a value form 0.0 to 1.0 and gives us a estimate of whether the audio piece was a song or maybe a poem or a audiobook. Higher the value, more likely the audio piece will be a poem, audiobook or a sonnet.
- **Valence** - A value from 0.0 to 1.0. Delineates a estimate of how happy or euphoric your song is, higher the value more happy and cheerful the song, lower the value, the song tends to be more sad, angry or emotional.
- **Mode** - This is a categorical value, meaning it has only 2 values. Major and Minor. Songs in the minor mode tend to be more melancholic or mellow. Major songs tend to be bright, bold and confident.
- **Energy** - This is yet again a value from 0.0 to 1.0 and higher values in songs tend mean that they are more energetic, lower values are softer and less intense.

## TECH-STACK

Built using modern technologies like:

1. **NodeJS** - For the Back-end server-side code.
2. **Spotify Authentication** - For getting the user data and authenticating the Spotify account.
3. **ChartJS** - To plot the beautiful graphs on the website.
4. Some helper libraries/packages like:
   - **SpotifyWebApi** - A wrapper for Spotify Auth.
   - **Morgan** - For dev logging.
   - **DotENV** - For handling env files for holding sensitive information.
   - **RandomColor** - For generating random attractive colors.
   - **Parcel** - For bundling Front-End Javascript files.
   - **Pug** - This is the template engine I used.

Deployed using **OnRender**

## REQUIREMENTS

**_None!!_** Just head to the link at the top and log in to the Spotify Account and enjoy the web app! That's it!

- If you don't have one account, head over to ***https://www.spotify.com/*** and create an account. Be sure to listen to a few different songs so that **Graphin' Tunes** can get the data to plot the graphs.

- If you want to see the code and play around with the code, just replace the process.env files with the specific values like _YOUR_ spotify client*ID or \_YOUR* secret client_ID etc.

## Just a note - Graphin Tunes asks for permission to access only 2 things:

    - Your email and name - To display a welcome message when you log in!
    - Your recently played songs - To get the data to plot the beautiful graphs.

## SOME VERY IMPORTANT POINTS

- **Be sure to listen to different songs of your liking and not repeat the same songs for a _much_ better experience! After all, you wouldn't like all the graphs to have the same values, would you?**

- **Note that the various audio features in this application are not 100% correct. These features have come from a machine learning model, trained with limited data( gigabytes of data, but in this data-centric world, this is quite less ). Hence if some songs have audio features that don't make sense, its solely due to the fact that machine learning, albeit powerful, is still in its baby steps and will take time and more data to evolve**

- **Note that the application might take 10-15 seconds to load up on the first load. This is because I am using a free account of Render and have limited uptime hours. Hence the web-app sleeps after 1 hour of inactivity, but after the first short delay of the first load, the application works normally and well.**

- **The graphs are fully interactable, you can click on labels to disable them, enable them and they also adjust according to your screen size and zoom level**

This application is a standalone project on its own and an idea I had for a long time, but it was also built as a final Project for CS50x, **Harvard's Quintessential Course** for the _Intellectuals of Computer Science and the Art of Programming._
