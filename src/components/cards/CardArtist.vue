<template>
  <div class="card">
    <h3>{{ artist.name }}</h3>
    <img :src="artist.imageUrl" />
    <div class="info">
      <p>{{ artist.genres }}</p>
      <p>Popularidade: {{ artist.popularity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArtist",
  props: {
    artist: Object
  }
};
</script>
