<template>
  <div class="card my-2 mx-2" :id="'album-' + albumName" style="width: 18rem">
    <img class="card-img-top" :src="imageUrl" alt="Album cover image" />
    <div class="card-body">
      <p class="card-title">{{ albumName }}</p>
      <p class="card-text">
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
