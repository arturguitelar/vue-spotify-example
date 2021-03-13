<template>
  <header class="header">
    <div class="container">
      <h1>Searchify Music</h1>
      <Search />
      <Nav />
    </div>
  </header>
</template>

<script>
import Search from "../Search.vue";
import Nav from "../Nav.vue";

export default {
  components: { Search, Nav },
  name: "Header"
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: var(--secondary-color);
  text-align: center;
  padding: 10px 0;
  z-index: 10;
  box-shadow: 0px 6px 3px 0px rgb(0 0 0 / 30%);
  border-bottom: var(--border-default);
}
</style>
