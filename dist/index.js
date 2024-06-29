const axios = require("axios");
const cheerio = require("cheerio");
const { fetchData } = require("./Driver/request");

const cleanQuery = (query) => {
    return query.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase().trim();
};

const fetchLyricsFromMultipleSources = async (url) => {
    const targetHtml = await axios.get(url);
    const $ = cheerio.load(targetHtml.data);
    const lyricsContainer = $('[data-lyrics-container]');
    const lyricsArray = [];

    lyricsContainer.each((i, el) => {
        const lyricsHtml = $(el).html(); // Get inner HTML to preserve <br> tags
        const formattedLyrics = lyricsHtml
            .replace(/<\/?span[^>]*>/g, "") // Remove <span> tags
            .replace(/<\/?a[^>]*>/g, "");   // Remove <a> tags
        lyricsArray.push(formattedLyrics);
    });

    return lyricsArray;
};

const getLyrics = async (query) => {
    try {
        if (!query) {
            return {
                status: 400,
                message: "Song name query is required!",
            };
        }

        const cleanSongName = cleanQuery(query);
        const hits = await fetchData(cleanSongName);

        if (!hits || hits.length === 0) {
            return [];
        }

        const songs = hits.map(hit => ({
            title: hit.result.full_title,
            artist: hit.result.primary_artist.name,
            thumbnail: hit.result.song_art_image_thumbnail_url,
            url: hit.result.url
        }));

        const songsWithLyrics = [];
        for (const song of songs) {
            const lyrics = await fetchLyricsFromMultipleSources(song.url);
            songsWithLyrics.push({
                ...song,
                lyrics
            });
        }

        console.log(songsWithLyrics);
        return songsWithLyrics;
    } catch (err) {
        console.error('Error in getLyrics:', err); // Added log
        throw err;
    }
};

exports.getLyrics = getLyrics;
