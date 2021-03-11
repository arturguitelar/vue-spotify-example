<template>
  <section class="cards-section">
    <Card v-for="artist in artists" :key="artist.id" v-bind:artist="artist" />
  </section>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardSection",
  components: {
    Card
  },
  data() {
    return {};
  },
  computed: {
    artists() {
      return this.$store.getters.getArtists;
    }
  }
};
</script>
