<template>
  <Header />
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

export default {
  name: "Albums",
  components: {
    Header,
    Footer,
    CardSection,
    Main
  }
};
</script>
