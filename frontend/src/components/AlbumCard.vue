<template>
  <div class="card my-2 mx-2 p-0 border-0" :id="'album-' + albumName" style="width: 18rem; max-height: 25rem">
    <img class="card-img-top" :src="imageUrl" alt="Album cover image" />
    <div class="card-body">
      <p class="card-title text-truncate">{{ albumName }}</p>
      <p class="card-text text-truncate">
        <small class="text-muted">{{ artistName }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  data() {
    return {};
  },
  props: {
    albumName: String,
    artistName: String,
    imageUrl: String,
  },
};
</script>
