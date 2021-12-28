<template>
  <div class="card my-2 mx-2 p-0 border-0" :id="'album-' + albumName" style="width: 18rem; max-height: 25rem">
    <img class="card-img-top" :src="imageUrl" alt="Album cover image" />
    <div class="card-body">
      <p class="card-title text-truncate"><i class="fa fa-music mx-2"></i>{{ albumName }}</p>
      <p class="card-text text-truncate text-muted">
        <i class="fa fa-user-alt mx-2"></i>
        <small>{{ artistName }}</small>
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
