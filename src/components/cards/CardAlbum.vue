<template>
  <div class="card card-album">
    <img :src="album.imageUrl" />
    <div class="info">
      <h3 class="name">{{ album.name }}</h3>
      <p class="artist">{{ album.artist }}</p>
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

<style>
.card-album {
  display: flex;
  flex-direction: column;
}

.card-album img {
  width: 100%;
  height: auto;
}

.card-album .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  padding: 10px;
}

.card-album .name {
  font-size: 16px;
}

.card-album .artist {
  color: var(--gray-text);
  font-style: italic;
  font-size: 12px;
  text-align: right;
  border-top: var(--border-default);
  margin-top: 10px;
  padding-top: 10px;
}
</style>
