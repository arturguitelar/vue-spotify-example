<template>
  <header class="header">
    <div class="container">
      <h1>Searchify Music</h1>
      <div class="search">
        <input
          class="search-input"
          type="text"
          placeholder="Nome do artista..."
        />
        <button class="search-btn">O-</button>
      </div>
      <nav class="filters">
        <ul>
          <li><a class="active" href="#">Artista</a></li>
          <li><a href="#">Album</a></li>
          <li><a href="#">Música</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <div class="card" v-for="n in 20" :key="n">
        <h3>Nome do Artista</h3>
        <img src="https://via.placeholder.com/500" alt="" srcset="" />
        <div class="info">
          <p>Gênero: Rock</p>
          <p>Popularidade: 80</p>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <button>Mais...</button>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-color: #2c2c2c;
  --secondary-color: #181818;
  --effect-color: rgba(14, 148, 47, 0.2);
}

body {
  background-color: var(--main-color);
  color: white;
  overflow-x: hidden;
}

.container {
  min-width: 360px;
  max-width: 1200px;
  margin: 0 auto;
}

/* HEADER */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: var(--secondary-color);
  text-align: center;
  padding: 10px 0;
  z-index: 10;
}

/* FILTER */
.filters ul {
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
}

.filters a {
  display: block;
  text-decoration: none;
  margin: 10px;
  color: darkgray;
  transition: 0.5s;
}

.filters a:hover {
  color: white;
  text-shadow: 0 0 10px var(--effect-color);
}

.filters a.active {
  color: white;
}

/* SEARCH */
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

/* MAIN */
.main {
  margin-top: 200px;
}

.main .container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.card {
  background-color: var(--secondary-color);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.card:hover {
  border: 1px solid var(--effect-color);
  box-shadow: 0 0 40px var(--effect-color);
  transform: translate(0, -5px);
}

.card h3 {
  position: absolute;
  background-color: var(--secondary-color);
  padding: 10px;
  opacity: 0.8;
  margin-top: 10px;
  font-style: italic;
  font-variant-caps: all-small-caps;
}

.card .info {
  padding: 10px;
  line-height: 1.2rem;
}

.card img {
  max-width: 100%;
  height: auto;
}
</style>
