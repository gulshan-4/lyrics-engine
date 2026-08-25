<h1 align="center"> <a href="https://github.com/gulshan-4/lyrics-scraper">@gulshan-4/lyrics-engine</a>
</h1>

<h4 align="center"> A Simplest and powerful <a href="https://genius.com/">Genius Lyrics </a> Search Engine/Scrapper
</h4>

<br>

<p align="center">
<a href="#">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="140px">
</a>
  
</p>

<br>

# Description:
- This is a Scraper which can scrap and give you lyrics of songs that're available on [Genius Offitial Site](https://genius.com/).
- This will take a query, perform a search, and return data of songs that're found, including lyrics.
- This can return title, album thumbnail, lyrics and even url of each song if they are available.
- Scraping an website is not always allowed by the website owners. This project is made for educational purposes only.

<br>

# Installation:

```
npm i @gulshan-4/lyrics-engine
```

<br>

## Usage:

- For ES5 Javascript

```js
const {getLyrics} = require("@gulshan-4/lyrics-engine");

const main = async () => {
  const data = await getLyrics("Levels"); 
  console.log(data);
};
main();
```

<br>

- For ES6 Javascript / Typescript

```js
import { getLyrics } from "@gulshan-4/lyrics-engine";

const main = async () => {
  const data = await getLyrics("Levels");
  console.log(data);
};
main();
```

## Output:


```js
[
    {
        "title": "Levels by Meek Mill",
        "artist": "Meek Mill",
        "thumbnail": "https://images.genius.com/f4d3a03b41615ac72cdbd64bcad03b67.300x300x1.jpg",
        "url": "https://genius.com/Meek-mill-levels-lyrics",
        "lyrics": [
            "[Intro]<br>See, it's brackets, nigga<br>Them hoes ain't fuckin' you<br>'Cause you ain't in that bracket, nigga<br>Learn life, it's levels to this shit, young boy<br>Ayy, O, you feel me?<br><br>[Chorus]<br>Lil' nigga, we don't rock the same clothes<br>Fuck the same hoes, 'cause it's levels to this shit<br>Lil' nigga, we don't drive the same whips<br>We don't fuck the same chicks, 'cause it's levels to this shit<br>Lil' nigga, we don't get the same paper<br>You a motherfuckin' hater, boy, it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit—oh Lord!<br><br>[Verse 1]<br>'Cause it's levels to this shit, levels to this shit<br>Can't fuck my ho, 'cause it's levels to this bitch<br>And I be rockin' Prada like a devil in this bitch<br>And a Birkin bag like a gold medal to this bitch<br>And I'm heavy as it get<br>Shinin' like a motherfuckin' bezel on my wrist<br>All my niggas mobbin' so we heavy in this bitch<br>Thirty grand for the Muller, that's a Chevy on my wrist<br>Woo! Cocaine Mulsanne<br>Young nigga blowin' up; Kurt Cobain—boom!<br>Skatin' on them like I'm Lil Wayne<br>And this 458 don't do the lil' lane—vroom!<br>Swerve on 'em, niggas gotta nerve on 'em<br>'Cause I heard the feds got him and he had them birds on him<br>But a nigga back home and now niggas roll with him<br>Caught a case, what you think? Nigga fuckin' told on him<br>I ain't get my shit snatched yet<br>You ain't get your bitch back yet<br>One call, niggas aim that TEC<br>Blood drawn, headshot, nigga brains on step<br>Hot shit if you pop shit<br>And I don't want your opinion if you ain't got shit<br>We young niggas, we winnin', I pull up, drop shit<br>Mob shit, with more keys than a locksmith<br>",
            "[Chorus]<br>Lil' nigga, we don't rock the same clothes<br>Fuck the same hoes, 'cause it's levels to this shit<br>Lil' nigga, we don't drive the same whips<br>We don't fuck the same chicks, 'cause it's levels to this shit<br>Lil' nigga, we don't get the same paper<br>You a motherfuckin' hater, boy, it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit—oh Lord!<br><br>[Verse 2]<br>Damn, Tommy, you ain't got no job!<br>DC, we the motherfuckin' mob<br>Young nigga gettin' straight to the money<br>In a Range with your honey, I pull up, like, \"Ahh!\"<br>I make them power moves with Jay and them<br>Them boys shootin', don't play with them<br>Maybach, Rozay and them<br>Rollin' down Collins, call Rugs, hit the A with them<br>Compound niggas live now<br>If it's the finals I'm ballin' like I'm LeBron now<br>I call up Onyx and tell them bitches to calm down<br>I treat the jet like a taxi the way I'm flyin' round<br>And I don't fuck with no niggas<br>If they don't fuck with my niggas<br>And I ain't fuckin' no bitches, if they fuckin' my niggas<br>",
            "[Chorus]<br>Lil' nigga, we don't rock the same clothes<br>Fuck the same hoes, 'cause it's levels to this shit<br>Lil' nigga, we don't drive the same whips<br>We don't fuck the same chicks, 'cause it's levels to this shit<br>Lil' nigga, we don't get the same paper<br>You a motherfuckin' hater, boy, it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit—oh Lord!<br><br>[Verse 3]<br>One time for the real niggas<br>Two times for the bad bitches<br>Y'all suckas be cuffin' hoes<br>'Cause y'all suckas never had bitches<br>I hit the dealer, bought another Rolls<br>That's the reason why you mad, nigga?<br>That's the reason why you hatin' on me?<br>I love ballin'—my bad, nigga<br>'Cause it's levels to this shit, levels to this shit<br>Can't fuck my ho, 'cause it's levels to this bitch<br>'Cause it's levels to this bitch<br>And a Birkin bag like a gold medal to this bitch<br>Lord, Lord, Lord, Lord, hold up!<br><br>[Chorus]<br>Lil' nigga, we don't rock the same clothes<br>Fuck the same hoes, 'cause it's levels to this shit<br>Lil' nigga, we don't drive the same whips<br>We don't fuck the same chicks, 'cause it's levels to this shit<br>Lil' nigga, we don't get the same paper<br>You a motherfuckin' hater, boy, it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit<br>Lil' nigga, 'cause it's levels to this shit—oh Lord!"
        ]
    },
    {
        "title": "Levels by Lil Wayne (Ft. Vado)",
        "artist": "Lil Wayne",
        "thumbnail": "https://images.genius.com/73f9fc028f3fbec659c384d87b8a9cf1.300x300x1.png",
        "url": "https://genius.com/Lil-wayne-levels-lyrics",
        "lyrics": [
            "[Verse 1: Lil Wayne]<br>Man all you pussy niggas drive me crazy<br>Make me sick to my stomach, I feel nauseated<br>All you haters hold hands and jump off a building<br>I could still taste her pussy, memorabilia<br>Backpack full of artillery, one me, no equivalent<br>These niggas acting like lil bitches<br>I don’t understand this shit like you scribbled it<br>Took her clothes, step back and exhibit it<br>Then tear her ass up like a parking ticket<br>The end of the road is at walking distance<br>Have to get that blood off my hands, left the faucet drippin<br>In yo face like a airbag in a car collision<br>My weed man so consistent<br>I’m stayin rich, tryin not to make poor decisions<br>Everything I do I plan it out like a solar system<br>Nigga if you clumsy you gon slip and fall a victim to me<br>Your bitch is sendin' naked pictures to me<br>Then she shoot over to my house, I scoot over in a bed<br>I shoot off in her mouth then she bit the bullet uh<br>Skatin on em like I’m Lil Wayne<br>And the weed so strong I can feel veins<br>Write it down, take a picture, now I feel framed<br>The drugs got me so numb I can’t feel ashamed<br>And my girl at home with the mood swings<br>Girl I gotta make a few runs like Usain<br>Wish I had a penny for my thoughts for some loose change<br>Hungry niggas going at yo neck for that food chain<br>Pop some pills that make me sleepy<br>Hoes creep me in they Teepee<br>I hope that pussy taste like kiwi<br>Hope it’s nicer than Tahiti, hopin I could get a freebie<br>Leavin a nigga body floatin with a mouth full of seaweed<br>What's in my Louis backpack, that’s E.T<br>Snitches give me the heebeegeebees<br>I hope they’ll disappear, where the fuck is Houdini?<br>I got niggas on my side, you got niggas on yo back<br>I’mma yell timber, money grow on trees<br>Money over queens, fuck you blow me<br>I sit back enjoy the breeze, hoes prettier than please<br>I don’t really do shit but sit back and call the shots<br>She poured out her heart, I had it on the rocks<br>Red beam on yo head, that’s a cherry on top<br>You don’t wanna keep your cool, I know niggas that’ll die uh<br>I danced with the devil in my dreams<br>When I wake up I still hear the same song<br>Make me wanna blow a motherfucker brains out<br>Flood warning nigga, I’m about to brainstorm, lil nigga<br>I’ll take yo main ho, make her call her homegirl<br>Make em share the same dick<br>It’s that motherfuckin Dedication 5<br>I just hope I’ll be alive to see a Dedication 6<br>Lil Tunechi<br>",
            "[Verse 2: Vado]<br>Ayo it’s levels to this shit, levels to this shit<br>Been doing MIA since Levels was the shit<br>And niggas know I’m on another level with this shit<br>I’m pedaling the 6, full metal when it hit<br>All I need is a shovel and a ditch<br>You done dig me a hole then you show me where it is<br>Run in his home and show me where the kids<br>Put one in his dome while he going in his fridge<br>That’s me, him nigga<br>Black piece AP, gold trim nigga<br>Black jeans, grey tee, old Tim’s nigga<br>Backstreet, everything go for 10 nigga<br>Keep quiet, beef we deep fry it<br>I’m in the streets like Rodney King’s riots<br>Mommy opposed their lead tight<br>On that old bullshit, Pete Myers<br>They scream and seize fire<br>My audible like Godfather meets Wire<br>A felon in the whip<br>Rollin 3 6’s, devil on trips<br>Shots whistled like a kettle when it’s lit<br>I’m tryin to go ballistic, shadow in the ship<br>Call the Barney Rubble in the whip<br>Made her kick rocks, blow haze from ziplocks uh"
        ]
    },
    {
        "title": "Levels by Avicii",
        "artist": "Avicii",
        "thumbnail": "https://images.genius.com/749c7aa653060b81fada2e27ad8c150b.300x300x1.png",
        "url": "https://genius.com/Avicii-levels-lyrics",
        "lyrics": [
            "[Instrumental]<br><br>[Chorus: Etta James]<br>Oh, sometimes I get a good feeling, yeah<br>Get a feeling that I never, never, never, never had before, no no<br>I get a good feeling, yeah<br>Oh, sometimes I get a good feeling, yeah<br>Get a feeling that I never, never, never, never had before, no no<br>I get a good feeling, yeah<br><br>[Instrumental]"
        ]
    }
]
```

<br>

# Making of @gulshan-4/lyrics-engine

## How?

- Using [Axios](https://github.com/axios/axios) and [Cheerio](https://github.com/cheeriojs/cheerio)
- **Axios -** A promise based HTTP client for the browser and node.js
- **Cheerio -** A fast, flexible, and elegant library for parsing and manipulating HTML and XML.

<br />

# Contributions
- Made/Modified by [gulshan-4](https://github.com/gulshan-4)
- Original implementation based on [lyrics-scrapper](https://github.com/FantoX/lyrics-scraper) by [FantoX](https://github.com/FantoX) which automatically returned data for a single song.
- Enhanced functionality to perform comprehensive searches and return data for all songs found, unlike the original lyrics-scrapper which returned data for a single song.

<br />

# Support me

- If you appreciate my project, please consider <a href="https://buymeacoffee.com/gulshan.4"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="32" align="center"></a>.
- Please follow me on GitHub to get notified about my upcoming projects.

<br />
