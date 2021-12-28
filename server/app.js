import express from "express";
import config from "./config.js";
import { getAlbums } from "./helpers.js";

// Express.js instance setup
const app = express();

// Allow CORS from frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.frontendOrigin);
  next();
});

// /GET Albums for artist
app.get("/:artist", async (req, res) => {
  var albums = await getAlbums(req.params.artist);
  res.json(albums);
});

app.listen(config.port, () => {
  console.log(`Server setup at http://localhost:${config.port}`);
});
