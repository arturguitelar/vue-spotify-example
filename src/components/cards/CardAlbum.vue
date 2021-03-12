<template>
  <div class="card">
    <h3>{{ album.name }}</h3>
    <img :src="album.imageUrl" />
    <div class="info">
      <p>Artista: {{ album.artist }}</p>
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
