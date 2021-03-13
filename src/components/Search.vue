<template>
  <div class="search-container">
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="Não funciona ainda. Calma..."
      />
      <button class="search-btn">
        <svg
          class="svg-icon search-icon"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g class="search-path" fill="none" stroke="#000">
            <path stroke-linecap="square" d="M19.5 19l-5.4-5.4" />
            <circle cx="9" cy="9" r="7" />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
.search-container {
  margin: 10px 0;
}

.search {
  width: 350px;
  height: 40px;
  display: flex;
  flex-direction: row;
  margin: auto;
  background-color: #fff;
}

.search-input {
  padding: 10px;
  flex: auto;
  border-radius: 0;
  background: transparent;
  border: none;
  transition: 0.5s;
}

.search-btn {
  width: 40px;
  padding: 10px;
  border-radius: 0;
  background: transparent;
  border: none;
  border-left: var(--border-default);
  cursor: pointer;
}

.search-path {
  stroke: var(--main-color);
  stroke-width: 3px;
  transition: 0.5s;
}

.search-btn:hover .search-path {
  stroke: var(--effect-color);
}
</style>
