<template>
<header class="header">
  <img src="../assets/images/logo.png" alt="Caluga | Inside" class="header__logo">
  <div class="header__links">
    <div v-if="!this.$store.state.isLogin" class="btn header__link" @click="this.$store.dispatch('showLogin', true)">Авторизация</div>
    <router-link to='/all-claims' v-if="this.$store.state.isLogin && this" class="btn header__link">Мои заявки</router-link>
    <router-link to='/' v-if="this.$store.state.isLogin && this" class="btn header__link" >Написать</router-link>
    <div v-if="this.$store.state.isLogin" class="btn header__link" @click="signOut">Выйти</div>
  </div>
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

.header__links {
  display: flex;
  align-items: center;
}

.header__link {
  margin-left: 1rem;
}

.header__logo {
  width: 10rem;
}

@media (min-width: 1100px) {
  .header {
    margin-bottom: 6rem;
  }
}

@media (max-width: 375px) {
  .header__logo {
    width: 7rem;
  }

  .btn {
    padding: .5em 1rem;
  }
}
</style>

<script>
import router from "../router";
export default {
  name: "Header",
  data() {
    return {

    }
  },
  methods: {
    signOut() {
      this.$auth.signOut()
      .then(() => {
        this.$store.dispatch('login', false)
        router.push('/')
      })
    }
  },
}
</script>