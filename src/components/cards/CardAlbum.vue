<template>
  <div class="card">
    <h3>{{ album.name }}</h3>
    <img :src="album.images[0].url" />
    <div class="info">
      <p>Artista: {{ album.artists[0].name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAlbum",
  props: {
    album: Object
  }
};
</script>
