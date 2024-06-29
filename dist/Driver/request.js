const axios = require("axios");

const fetchData = async function (searchTerm) {
    try {
        const encodedTerm = encodeURIComponent(searchTerm);
        const target = "https://genius.com/api/search/multi?q=" + encodedTerm;
        console.log('Fetching URL:', target); // Added log
        const res = await axios.get(target);

        if (res.status === 200) {
            const sections = res.data.response.sections;
            const songHits = sections.find(section => section.type === 'song').hits;
            return songHits;
        } else {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
    } catch (err) {
        console.error('Error fetching data:', err); // Added log
        throw err;
    }
};

module.exports = { fetchData };
