<template>
  <div class="search-container">
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="Busque aqui..."
        v-model="searchInput"
        @keyup.enter="search"
      />
      <button v-show="hasData" class="search-btn" @click="clearSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="delete-icon"
        >
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
          <line x1="18" y1="9" x2="12" y2="15"></line>
          <line x1="12" y1="9" x2="18" y2="15"></line>
        </svg>
      </button>
      <button class="search-btn" @click="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="search-icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInput: ""
    };
  },
  props: {
    getData: {
      type: Function
    }
  },
  computed: {
    hasData() {
      return this.searchInput !== "";
    }
  },
  methods: {
    search() {
      this.searchInput = this.searchInput.trim();
      if (this.isValidInput()) {
        return;
      }
      this.getData(this.searchInput);
    },
    clearSearch() {
      this.searchInput = "";
      this.$store.dispatch("clearSearch");
    },
    isValidInput() {
      return !this.searchInput;
    }
  }
};
</script>

<style>
.search-container {
  margin: 10px 0;
}

.search {
  width: 320px;
  display: flex;
  flex-direction: row;
  margin: auto;
  background-color: #fff;
}

.search-input {
  min-width: 100px;
  padding: 10px;
  flex: auto;
  border-radius: 0;
  background: transparent;
  border: none;
  transition: 0.5s;
}

.search-btn {
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 0;
  background: transparent;
  border: none;
  border-left: var(--border-default);
  cursor: pointer;
}

.search-btn .search-icon,
.search-btn .delete-icon {
  stroke: var(--main-color);
  stroke-width: 2px;
  transition: 0.5s;
}

.search-btn:hover .search-icon,
.search-btn:hover .delete-icon {
  stroke: var(--effect-color);
}
</style>
