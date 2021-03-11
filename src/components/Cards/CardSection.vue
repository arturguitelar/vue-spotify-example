<template>
  <section class="cards-section">
    <Cards v-for="n in 10" :key="n" />
  </section>
</template>

<script>
import Cards from "./Cards";

export default {
  name: "CardSection",
  components: {
    Cards
  }
};
</script>
