<template>
  <div class="fill">
    <!-- NAVBAR -->
    <nav class="navbar static-top navbar-dark" style="background: black">
      <div class="mx-auto">
        <span class="navbar-brand align-bottom">
          <i class="px-2 fa fa-th text-light"></i>
          <i class="px-2 fa fa-music text-light"></i>
          Album Grid
          <i class="px-2 fa fa-music text-light"></i>
          <i class="px-2 fa fa-th text-light"></i>
        </span>
      </div>
    </nav>

    <!-- SEARCH SECTION -->
    <section id="search" class="container align-items-center">
      <div class="row mt-5">
        <div class="col">
          <h2 class="text-light">Find the albums of your favourite artists!</h2>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <input
            class="form-control"
            type="text"
            placeholder="Search by artist name"
            aria-describedby="search-button"
            v-model="searchTerm"
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
    </section>

    <hr v-show="albums.length" class="my-5" style="color: white" />

    <!-- RESULTS SECTION -->
    <section id="results" class="mt-5">
      
      <!-- Loading indicator -->
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border text-light" role="status"></div>
      </div>

      <!-- EmptyState for Search -->
      <EmptyState
        v-if="showEmpty && !loading"
        v-bind:message="'No results found for this artist'"
      ></EmptyState>

      <!-- Filter albums -->
      <div v-if="albums.length" class="container">
        <div class="row justify-content-end my-4">
          <div class="col-md-6">
            <div class="input-group">
              <input
                class="form-control round"
                type="text"
                placeholder="Filter by album name"
                v-model="filterTerm"
              />
              <button
                type="button"
                class="btn bg-transparent align-text-top"
                style="margin-left: -40px; z-index: 100"
                v-on:click="clearFilter"
              >
                <i class="fa fa-times-circle"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- EmptyState for Filtering -->
        <EmptyState
          v-if="filterTerm && !showAlbums.length"
          v-bind:message="'No results found that match your filter'"
        ></EmptyState>

        <!-- Results -->
        <div class="row justify-content-center justify-content-md-between">
          <AlbumCard
            v-for="album in showAlbums"
            :key="album.collectionName"
            v-bind:albumName="album.collectionName"
            v-bind:artistName="album.artistName"
            v-bind:imageUrl="album.artworkUrl100"
          ></AlbumCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AlbumCard from "./components/AlbumCard.vue";
import EmptyState from "./components/EmptyState.vue";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      albums: [],
      searchTerm: "",
      filterTerm: "",
      showEmpty: false,
    };
  },
  methods: {
    getAlbums: async function () {
      this.clearFilter();
      this.albums = [];
      if (this.searchTerm !== "") {
        this.loading = true;
        axios
          .get(`http://localhost:3000/${this.searchTerm.replace(" ", "+")}`)
          .then((response) => {
            if (response.data.length === 0) {
              this.loading = false;
              this.albums = [];
              this.showEmpty = true;
              return;
            } else {
              this.showEmpty = false;
              response.data.forEach(
                (x) =>
                  (x.artworkUrl100 = x.artworkUrl100.replace(
                    "100x100",
                    "300x300"
                  ))
              );
              this.albums = response.data;
              this.loading = false;
            }
          })
          .catch((err) => console.log(err));
      }
    },
    clearFilter: function () {
      this.filterTerm = "";
    },
  },
  components: {
    AlbumCard,
    EmptyState,
  },
  computed: {
    showAlbums() {
      if (!this.filterTerm) {
        return this.albums;
      } else {
        return this.albums.filter((x) =>
          x.collectionName.toLowerCase().includes(this.filterTerm.toLowerCase())
        );
      }
    },
  },
};
</script>

<style>
.round {
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
}
</style>