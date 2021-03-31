<template>
  <Header>
    <Search :getData="getTracks" />
  </Header>
  <Main>
    <h2>Músicas</h2>
    <CardSection page="tracks" />
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
  name: "Tracks",
  components: {
    Header,
    Footer,
    CardSection,
    Main,
    Search
  },
  methods: {
    getTracks(query) {
      this.$store.dispatch("search", query);
    }
  }
};
</script>
