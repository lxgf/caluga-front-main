<template xmlns:button="http://www.w3.org/1999/html">
  <div class="register-modal">
    <div class="register-modal__head">
      <div class="register-modal__head__heading">Регистрация</div>
      <div class="register-modal__head__close-btn"></div>
    </div>
    <form class="register-modal__form">
      <input autofocus type="text" class="register-modal__form__email" placeholder="Email">
      <input type="text" class="register-modal__form__password" placeholder="Пароль">
      <div class="register-modal__form__no-register">Нет аккаунта?</div>
      <button type="submit" class="register-modal__form__btn btn btn--accent">Войти</button>
    </form>
  </div>
</template>

<style scoped>
.register-modal {
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(58.95% 50% at 50% 50%, #30004E 0%, #0B0C16 100%);
  width: 80%;
  padding: 3rem 2.4rem;
  border-radius: 2.4rem;
}

.register-modal__head {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

.register-modal__head__heading {
  font-size: 2.4rem;
  line-height: 2.2rem;
  font-weight: 500;
}

.register-modal__head__close-btn {
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

.register-modal__head__close-btn:hover {
  opacity: 70%;
}

.register-modal__form {
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 2rem;
}

.register-modal__form__no-register {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  transition: .3s ease;
  cursor: pointer;
}

.register-modal__form__no-register:hover {
  color: #C895FFFF;
}

.register-modal__form__btn {
  width: 100%;
}

@media (min-width: 768px) {
  .register-modal {
    width: 40%;
  }
}

@media (min-width: 1100px) {
  .register-modal {
    width: 30%;
  }
}
</style>
