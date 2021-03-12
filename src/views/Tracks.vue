<template>
  <Header />
  <main class="main">
    <div class="container">

      <h2>Tracks</h2>
      
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
  name: "Tracks",
  components: {
    Header,
    Footer,
    CardSection
  }
};
</script>
