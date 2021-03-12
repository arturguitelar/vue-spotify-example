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
