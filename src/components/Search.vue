<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="Não funciona ainda. Calma..."
    />
    <button class="search-btn">O-</button>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
.search {
  padding: 10px 0;
}

.search-input {
  min-height: 40px;
  padding: 10px;
}

.search-btn {
  min-width: 40px;
  min-height: 40px;
  padding: 10px;
}
</style>
