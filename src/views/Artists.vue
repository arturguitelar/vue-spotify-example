<template>
  <Header>
    <Search :getData="getArtists" />
  </Header>
  <Main>
    <h2>Artistas</h2>
    <CardSection page="artists" />
  </Main>
  <Footer />
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CardSection from "@/components/cards/CardSection";
import Main from "@/components/shared/Main";
import Search from "@/components/Search.vue";

export default {
  name: "Artists",
  components: {
    Header,
    Footer,
    CardSection,
    Main,
    Search
  },
  methods: {
    getArtists(query) {
      this.$store.dispatch("search", query);
    }
  }
};
</script>
