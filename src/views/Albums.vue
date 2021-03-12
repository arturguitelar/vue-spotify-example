<template>
  <Header />
  <main class="main">
    <div class="container">

      <h2>Albums</h2>
      <CardSection />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CardSection from "@/components/cards/CardSection";

export default {
  name: "Albums",
  components: {
    Header,
    Footer,
    CardSection
  }
};
</script>
