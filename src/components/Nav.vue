<template>
  <nav class="filters">
    <ul>
      <li><router-link class="active" to="/">Artista</router-link></li>
      <li><router-link to="/albums">Album</router-link></li>
      <li><router-link to="/tracks">Música</router-link></li>
    </ul>
  </nav>
</template>

<style>
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
  color: var(--gray-text);
  transition: 0.5s;
}

.filters a:hover {
  color: white;
  text-shadow: 0 0 10px var(--effect-color);
}

.filters a.active {
  color: white;
}
</style>
