<template>
  <footer class="footer">
    <div v-show="hasData" class="button-container">
      <button disabled>Mais registros...</button>
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

.button-container button {
  margin: 10px;
  padding: 10px;
  background-color: var(--secondary-color);
  color: var(--gray-text);
  border: var(--border-default);
  box-shadow: 6px 6px 3px 0px rgb(0 0 0 / 30%);
  transition: 0.5s;
  cursor: pointer;
}

.button-container button:hover {
  background-color: var(--main-color);
  box-shadow: 0 0 9px 3px var(--effect-color);
}
</style>
