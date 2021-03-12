<template>
  <Header />
  <main class="main">
    <div class="container">
      <h2>Artistas</h2>
      <CardSection page="artists" />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CardSection from "@/components/cards/CardSection";

export default {
  name: "Artists",
  components: {
    Header,
    Footer,
    CardSection
  }
};
</script>
