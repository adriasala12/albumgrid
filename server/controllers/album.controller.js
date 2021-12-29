import fetch from "node-fetch";
import { sortUniqueAlbums } from "../utils/sort.unique.albums.js";

const getAlbums = async (req, res) => {
  try {
    const { artist } = req.params;
    let response = await fetch(
      `https://itunes.apple.com/search?term=${artist}&entity=album&attribute=allArtistTerm`
    );
    let data = await response.json();
    let results = data.results;

    res.status(200).json(sortUniqueAlbums(results));
  } catch (error) {
    res.send(error.message);
  }
};

export default getAlbums;
