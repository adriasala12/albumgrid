<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-dark bg-dark">
      <div class="containter-fluid">
        <span class="navbar-brand">
          <span class="px-2"
            ><b-icon-grid3x3-gap-fill></b-icon-grid3x3-gap-fill
          ></span>
          Album Grid
        </span>
        <span class="navbar-text d-none d-md-inline">
          Find the albums of your favourite artists!
        </span>
      </div>
    </nav>

    <!-- SEARCH SECTION -->
    <section id="search" class="">
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h1 class="text-light">Find your albums:</h1>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input
              class="form-control"
              type="text"
              placeholder="Search by artist name"
              aria-describedby="search-button"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <a
              id="search-button"
              type="button"
              class="btn btn-light btn-outline-secondary"
              v-on:click="getAlbums"
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTS SECTION -->
    <section id="results" class="mt-5">
      <div class="container">
        <div class="row justify-content-center justify-content-md-between">
          <div
            class="card my-2 mx-2"
            v-for="album in albums"
            :key="album.collectionName"
            style="width: 18rem"
          >
            <img
              class="card-img-top"
              :src="album.artworkUrl100"
              alt="Album cover image"
            />
            <div class="card-body">
              <p class="card-title">{{ album.collectionName }}</p>
              <p class="card-text">
                <small class="text-muted">{{ album.artistName }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      albums: [{ collectionName: "one" }, { collectionName: "two" }],
    };
  },
  methods: {
    getAlbums: async function (artist) {
      axios
        .get("http://localhost:3000/bad+bunny")
        .then((response) => {
          response.data.forEach(
            (x) =>
              (x.artworkUrl100 = x.artworkUrl100.replace("100x100", "300x300"))
          );
          this.albums = response.data;
        })
        .catch((err) => console.log(err));
    },
  },
  components: {},
};
</script>

