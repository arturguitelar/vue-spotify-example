<template>
  <section v-if="page == 'artists'" class="cards-section">
    <CardArtist
      v-for="artist in artists"
      :key="artist.id"
      v-bind:artist="artist"
    />
  </section>

  <section v-if="page == 'albums'" class="cards-section">
    <CardAlbum v-for="album in albums" :key="album.id" v-bind:album="album" />
  </section>

  <section v-if="page == 'tracks'" class="cards-section">
    <CardTrack v-for="track in tracks" :key="track.id" v-bind:track="track" />
  </section>
</template>

<script>
import CardArtist from "./CardArtist";
import CardAlbum from "./CardAlbum";
import CardTrack from "./CardTrack";

export default {
  name: "CardSection",
  components: {
    CardArtist,
    CardAlbum,
    CardTrack
  },
  data() {
    return {
      defaultPage: "artists"
    };
  },
  props: {
    // artists - albums - tracks
    page: String,
    default: () => "artists"
  },
  computed: {
    artists() {
      return this.$store.getters.getArtists;
    },
    albums() {
      return this.$store.getters.getAlbums;
    },
    tracks() {
      return this.$store.getters.getTracks;
    }
  }
};
</script>

<style>
/* CARD SECTION */
.cards-section {
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* CARDS - shared */
.card {
  background-color: var(--secondary-color);
  box-shadow: 6px 6px 3px 0px rgb(0 0 0 / 30%);
  transition: 0.5s;
}

.card:hover {
  box-shadow: 0 0 9px 3px var(--effect-color);
  transform: translate(0, -5px);
}
</style>
