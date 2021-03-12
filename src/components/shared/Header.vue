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
          <li><router-link class="active" to="/">Artista</router-link></li>
          <li><router-link to="/albums">Album</router-link></li>
          <li><router-link to="/tracks">Música</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
