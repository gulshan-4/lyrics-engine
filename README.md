<h1 align="center"> <a href="https://github.com/gulshan-4/lyrics-scraper">lyrics-engine</a>
</h1>

<h4 align="center"> A Simplest and most powerful <a href="https://genius.com/">Genius Lyrics </a> Search Engine/Scrapper
</h4>

<br>

<p align="center">
<a href="https://www.npmjs.com/package/@fantox01/lyrics-scraper">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="140px">
</a>
  
</p>

<br>

# Description:
- This is a Scraper which can scrap and give you lyrics of songs that're available on [Genius Offitial Site](https://genius.com/).
- This will take a query, perform a search, and return data of songs that're found, including lyrics.
- This can return title, album thumbnail and lyrics of each song if they are available.
- Scraping an website is not always allowed by the website owners. This project is made for educational purposes only.

<br>

# Installation:

```
npm i @fantox01/lyrics-scraper
```

```
yarn add @fantox01/lyrics-scraper
```

<br>

## Usage:

- For ES5 Javascript

```js
const getLyrics = require("@fantox01/lyrics-scraper");

const main = async () => {
  const data = await getLyrics("Heat Waves");
  console.log(data);
};
main();
```

<br>

- For ES6 Javascript / Typescript

```js
import { getLyrics } from "@fantox01/lyrics-scraper";

const main = async () => {
  const data = await getLyrics("Heat Waves");
  console.log(data);
};
main();
```

## Output:

- It will automatically format the lyrics and add new lines ("\n").
- Use `console.log(data.lyrics)` to for only lyrics and `console.log(data.thumbnail)` to get only thumbnail.

```js
{
  status: 200,
  url: 'https://genius.com/Glass-animals-heat-waves-lyrics',
  album: 'Heat Waves by Glass Animals',
  artist: 'Glass Animals',
  release_date: 'June 29, 2020',
  thumbnail: 'https://images.genius.com/25ffad8f4a6804e3efc869253f030baf.1000x1000x1.jpg',
  lyrics: '[Intro]\n' +
    '(Last night, all I think about is you)\n' +
    "(Don't stop, baby, you can walk through)\n" +
    "(Don't want, baby, think about you)\n" +
    "(You know that I'm never gonna lose)\n" +
    "Road shimmer wigglin' the vision\n" +
    "Heat, heat waves, I'm swimmin' in a mirror\n" +
    "Road shimmer wigglin' the vision\n" +
    "Heat, heat waves, I'm swimmin' in a—\n" +
    '\n' +
    '[Chorus]\n' +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    '\n' +
    '[Verse 1]\n' +
    "Usually, I put somethin' on TV\n" +
    'So we never think about you and me\n' +
    'But today, I see our reflections clearly\n' +
    "In Hollywood, layin' on the screen\n" +
    'You just need a better life than this\n' +
    "You need somethin' I can never give\n" +
    'Fake water all across the road\n' +
    "It's gone now, the night has come, but\n" +
    '\n' +
    '[Chorus]\n' +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    '\n' +
    '[Verse 2]\n' +
    "You can't fight it, you can't breathe\n" +
    "You say somethin' so lovin', but\n" +
    'Now I gotta let you go\n' +
    "You'll be better off in someone new\n" +
    "I don't wanna be alone\n" +
    'You know it hurts me too\n' +
    'You look so broken when you cry\n' +
    'One more and then I say goodbye\n' +
    '\n' +
    '[Chorus]\n' +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    '\n' +
    '[Bridge]\n' +
    "I just wonder what you're dreamin' of\n" +
    'When you sleep and smile so comfortable\n' +
    'I just wish that I could give you that\n' +
    "That look that's perfectly un-sad\n" +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Heat waves been fakin' me out\n" +
    '\n' +
    '[Chorus]\n' +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    'Sometimes, all I think about is you\n' +
    'Late nights in the middle of June\n' +
    "Heat waves been fakin' me out\n" +
    "Can't make you happier now\n" +
    '\n' +
    '[Outro]\n' +
    "Road shimmer wigglin' the vision\n" +
    "Heat, heat waves, I'm swimmin' in a mirror\n" +
    "Road shimmer wigglin' the vision\n" +
    "Heat, heat waves, I'm swimmin' in a mirror"
}
```

<br>

# Making of @fantox01/lyrics-scraper

## How?

- Using [Axios](https://github.com/axios/axios) and [Cheerio](https://github.com/cheeriojs/cheerio)
- **Axios -** A promise based HTTP client for the browser and node.js
- **Cheerio -** A fast, flexible, and elegant library for parsing and manipulating HTML and XML.

## Why?

- IDK, scraping is fun to me and also legal upto a limited extend as long as you don't misuse it.
  <br />

# Contributions

- Made by [FantoX](https://github.com/FantoX001)
- I don't have any other contributors in this project yet. Feel free to contribute.

<br />

# Support me

- Give this project a 🌟 if you like my project.
- Please follow me on GitHub to get notified about my upcoming projects.

<br />
