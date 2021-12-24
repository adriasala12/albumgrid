import express from 'express';
import config from './config.js';

// Express.js instance setup
const app = express();

app.get("/", (req, res) => {
    res.send("Testing express");
})

app.listen(config.app.port, () => {
    console.log(`Server setup at http://localhost:${config.app.port}`)
})

