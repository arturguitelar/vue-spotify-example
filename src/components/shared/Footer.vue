<template>
  <footer class="footer">
    <div v-show="hasData" class="button-container">
      <button class="button-default" disabled>Mais registros...</button>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    hasData() {
      return this.$store.getters.getAlbums.length !== 0;
    }
  }
};
</script>

<style scoped>
.button-container {
  width: 100%;
  margin: 10px auto;
  padding-top: 10px;
  text-align: center;
  border-top: var(--border-default);
}
</style>
