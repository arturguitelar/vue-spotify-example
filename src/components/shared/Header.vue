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

        <!-- TODO: fazer os links funfarem -->
        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->

        <ul>
          <li><a class="active" href="#">Artista</a></li>
          <li><a href="#">Album</a></li>
          <li><a href="#">Música</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
