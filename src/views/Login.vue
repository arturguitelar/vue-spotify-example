<template>
  <div class="login-container">
    <h1 class="title">Searchify Music</h1>
    <div class="login">
      <h3>Login</h3>
      <button class="button-default" @click="login">Entrar</button>
    </div>
    <p>
      obs: Ainda não faz autenticação "de verdade". Clicar em login dá acesso
      true para as rotas. Na próxima tela, digite algo na barra de busca e,
      apertando Enter ou clicando na lupa, o app deve trazer uma lista fake.
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
      this.$router.push({ name: "Artists" });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  margin-bottom: 20px;
}

.login {
  width: 300px;
  background-color: var(--secondary-color);
  border: var(--border-default);
  padding: 10px;
  text-align: center;
}

.login-container p {
  margin: 20px auto;
  max-width: 600px;
}
</style>
