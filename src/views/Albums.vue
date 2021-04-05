<template>
  <Header>
    <Search :getData="getAlbums" />
  </Header>
  <Main>
    <h2>Álbums</h2>
    <CardSection page="albums" />
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
  name: "Albums",
  components: {
    Header,
    Footer,
    CardSection,
    Main,
    Search
  },
  methods: {
    getAlbums(query) {
      this.$store.dispatch("getAlbums", query);
    }
  }
};
</script>
