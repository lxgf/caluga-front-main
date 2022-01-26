<template>
<header class="header">
  <img src="../assets/images/logo.png" alt="Caluga | Inside" class="header__logo">
  <div class="btn" @click="this.$store.dispatch('showLogin', true)">Авторизация</div>
</header>
</template>


<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
}

.header__logo {
  width: 10rem;
}

@media (min-width: 1100px) {
  .header {
    margin-bottom: 6rem;
  }
}
</style>
