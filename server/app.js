import express from 'express';
import config from './config.js';
import fetch from 'node-fetch';

// Express.js instance setup
const app = express();

app.get("/:artist", async (req, res) => {
    var albums = await getAlbums(req.params.artist);
    res.json(albums)
})

app.listen(config.app.port, () => {
    console.log(`Server setup at http://localhost:${config.app.port}`)
})

async function getAlbums(artist) {
    let response = await fetch(`https://itunes.apple.com/search?term=${artist}&entity=album&attribute=allArtistTerm`)
    let data = await response.json();
    let results = data.results;
    
    let sorted = results.sort((a, b) => { 
        a = a.collectionName.toUpperCase();
        b = b.collectionName.toUpperCase();

        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    })

    let unique = sorted.filter((album, index, arr) => {
        return !index || album.collectionName != sorted[index-1].collectionName
    })
    
    return unique;
}