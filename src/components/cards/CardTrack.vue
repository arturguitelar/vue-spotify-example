<template>
  <div class="card">
    <h3>{{ track.name }}</h3>
    <img :src="track.album.images[0].url" />
    <div class="info">
      <p>Artista: {{ track.album.artists[0].name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTrack",
  props: {
    track: Object
  }
};
</script>
