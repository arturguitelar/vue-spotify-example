<template>
  <div class="card">
    <h3>{{ artist.name }}</h3>
    <img :src="artist.images[0].url" />
    <div class="info">
      <p>{{ artist.genres }}</p>
      <p>Popularidade: {{ artist.popularity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    artist: Object
  }
};
</script>
