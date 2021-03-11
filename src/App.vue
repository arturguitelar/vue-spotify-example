<template>
  <Header />
  <main class="main">
    <div class="container">
      <CardSection />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/Cards/CardSection";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CardSection
  }
};
</script>
