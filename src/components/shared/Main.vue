<template>
  <main class="main">
    <div class="container">
      <slot />
    </div>
  </main>
</template>

<style>
.main {
  margin-top: 200px;
  margin-bottom: 30px;
  padding: 10px;
}

.main h2 {
  margin-bottom: 14px;
  border-bottom: var(--border-default);
}
</style>
