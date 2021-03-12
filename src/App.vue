<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header />
  <main class="main">
    <div class="container">
      <CardSection />
    </div>
  </main>
  <Footer />
  <!-- <router-view /> -->
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
