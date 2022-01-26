<template xmlns:button="http://www.w3.org/1999/html">
  <div ref="loginModal" class="login-modal">
    <div class="login-modal__head">
      <div class="login-modal__heading">Вход</div>
      <div @click="this.$store.dispatch('showRegister', false)" class="login-modal__close-btn"></div>
    </div>
    <form class="login-modal__form form">
      <input autofocus type="text" class="form__email" placeholder="Email">
      <input type="text" class="form__password" placeholder="Пароль">
      <div @click="this.$store.dispatch('showRegister', true)" class="form__no-login">Нет аккаунта?</div>
      <button type="submit" class="form__btn btn btn--accent">Войти</button>
    </form>
  </div>
</template>

<style scoped>
.login-modal {
  display: flex;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(58.95% 50% at 50% 50%, #30004E 0%, #0B0C16 100%);
  width: 80%;
  padding: 3rem 2.4rem;
  border-radius: 2.4rem;
}

.login-modal__head {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

.login-modal__heading {
  font-size: 2.4rem;
  line-height: 2.2rem;
  font-weight: 500;
}

.login-modal__close-btn {
  cursor: pointer;
  display: inline;
  width: 2.1rem;
  height: 2.1rem;
  background-image: url('../assets/images/cross.svg');
  background-position: center;
  background-repeat: no-repeat;
  float: right;
  transition: all 0.2s 0s ease-in-out;
}

.login-modal__close-btn:hover {
  opacity: 70%;
}

.form {
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 2rem;
}

.form__no-login {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  transition: .3s ease;
  cursor: pointer;
}

.form__no-login:hover {
  color: #C895FFFF;
}

.form__btn {
  width: 100%;
}

@media (min-width: 768px) {
  .login-modal {
    width: 40%;
  }
}

@media (min-width: 1100px) {
  .login-modal {
    width: 30%;
  }
}
</style>