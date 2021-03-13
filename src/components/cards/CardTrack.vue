<template>
  <div class="card card-track">
    <img :src="track.imageUrl" />
    <div class="info">
      <h3>{{ track.name }}</h3>
      <p class="artist">{{ track.artist }}</p>
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

<style>
.card-track {
  display: flex;
  flex-direction: row;
}

.card-track img {
  max-width: 150px;
}

.card-track .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  padding: 10px;
}

.card-track .artist {
  color: var(--gray-text);
  font-style: italic;
  font-size: 12px;
  text-align: right;
  border-top: var(--border-default);
  margin-top: 10px;
  padding-top: 10px;
}
</style>
