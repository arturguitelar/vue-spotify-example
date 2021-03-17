<template>
  <Header />
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

export default {
  name: "Artists",
  components: {
    Header,
    Footer,
    CardSection,
    Main
  }
};
</script>
