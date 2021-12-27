<template>
  <div class="fill">
    <!-- NAVBAR -->
    <nav class="navbar static-top navbar-dark bg-dark">
      <div class="containter">
        <span class="navbar-brand align-bottom">
          <span class="px-2 text-light align-text-bottom"
            ><b-icon-grid3x3-gap-fill></b-icon-grid3x3-gap-fill
          ></span>
          Album Grid
        </span>
        <span class="navbar-text d-none d-md-inline align-text-bottom">
          Find the albums of your favourite artists!
        </span>
      </div>
    </nav>

    <!-- SEARCH SECTION -->
    <section id="search" class="">
      <div class="container align-items-center">
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
              v-model="searchterm"
              @keyup.enter="getAlbums"
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
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border text-light" role="status"></div>
      </div>

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
      loading: false,
      albums: [],
      searchterm: "",
    };
  },
  methods: {
    getAlbums: async function () {
      this.loading = true;
      axios
        .get(`http://localhost:3000/${this.searchterm.replace(" ", "+")}`)
        .then((response) => {
          response.data.forEach(
            (x) =>
              (x.artworkUrl100 = x.artworkUrl100.replace("100x100", "300x300"))
          );
          this.albums = response.data;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
  components: {},
};
</script>

