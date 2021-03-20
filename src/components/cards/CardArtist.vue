<template>
  <div v-if="artist" class="card card-artist">
    <h3 class="name">{{ artist.name }}</h3>
    <img :src="artist.imageUrl || 'https://via.placeholder.com/500'" />
    <div class="info">
      <p class="genres">{{ getGenres() }}</p>
      <p class="popularity">
        Popularidade: {{ artist.popularity }}
        <span :class="getBadge()">{{ getBadge() }}</span>
      </p>
    </div>
  </div>
  <div v-else>
    <p>Dados inválidos</p>
  </div>
</template>

<script>
export default {
  name: "CardArtist",
  props: {
    artist: Object
  },
  methods: {
    getGenres() {
      if (this.artist.genres.length === 0) {
        return "sem categoria";
      }
      return this.artist.genres.join(" - ");
    },
    getBadge() {
      const popularity = this.artist.popularity;

      if (popularity >= 80) {
        return "hot";
      } else if (popularity >= 60) {
        return "cool";
      } else if (popularity >= 30) {
        return "ok";
      }

      return "underground";
    }
  }
};
</script>

<style>
.card-artist {
  display: flex;
  flex-direction: column;
}

.card-artist .name {
  position: absolute;
  background-color: var(--secondary-color);
  padding: 10px;
  opacity: 0.8;
  margin-top: 10px;
  font-style: italic;
  font-variant-caps: all-small-caps;
}

.card-artist img {
  width: 100%;
  height: auto;
}

.card-artist .info {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  line-height: 1.2rem;
}

.card-artist .genres {
  color: var(--gray-text);
  font-style: italic;
  font-size: 12px;
  margin-bottom: 10px;
}

.card-artist .popularity {
  display: flex;
  justify-content: space-between;
  border-top: var(--border-default);
  padding-top: 10px;
}

.card-artist .popularity span {
  font-variant: small-caps;
  padding: 6px;
  color: white;
}

.popularity .hot {
  font-size: 30px;
  background: rgb(170, 14, 14);
  font-weight: bold;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 30%);
}

.popularity .cool {
  font-size: 26px;
  background: rgb(23, 134, 33);
  font-weight: bold;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 30%);
}

.popularity .ok {
  font-size: 20px;
  font-weight: bold;
  box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 30%);
}

.popularity .underground {
  font-size: 14px;
  color: gray;
}
</style>
