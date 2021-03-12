<template>
  <div class="card">
    <h3>{{ track.name }}</h3>
    <img :src="track.imageUrl" />
    <div class="info">
      <p>Artista: {{ track.artist }}</p>
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
