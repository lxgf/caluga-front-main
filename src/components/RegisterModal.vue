<template xmlns:button="http://www.w3.org/1999/html">
  <div ref="registerModal" class="register-modal">
    <div class="register-modal__head">
      <div class="register-modal__heading">Регистрация</div>
      <div @click="this.$store.dispatch('showRegister', false)" class="register-modal__close-btn"></div>
    </div>
    <form @submit.prevent='register' class="register-modal__form form">
      <input v-model='name' autofocus type="text" class="form__name" placeholder="Имя" required>
      <input v-model='surname' type="text" class="form__surname" placeholder="Фамилия" required>
      <input v-model='email' autofocus type="text" class="form__email" placeholder="Email" required>
      <input v-model='password' type="password" class="form__password" placeholder="Пароль" required>
      <div @click="this.$store.dispatch('showLogin', true)" class="form__have-account">Уже есть аккаунт?</div>
      <button class="form__btn btn btn--accent">Зарегистрироваться</button>
    </form>
  </div>
</template>

<style scoped>
.register-modal {
  display: flex;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(58.95% 50% at 50% 50%, #30004E 0%, #0B0C16 100%);
  width: 80%;
  padding: 3rem 2.4rem;
  border-radius: 2.4rem;
  box-shadow: 0 0 18px #23004e;
}

.register-modal__head {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;
}

.register-modal__heading {
  font-size: 2.4rem;
  line-height: 2.2rem;
  font-weight: 500;
}

.register-modal__close-btn {
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

.register-modal__close-btn:hover {
  opacity: 70%;
}

.form {
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 2rem;
}

.form__have-account {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  transition: .3s ease;
  cursor: pointer;
}

.form__have-account:hover {
  color: #C895FFFF;
}

.form__btn {
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

<script>
export default {
  name: "RegisterModal",
  methods: {
    show() {
      let registerModal = this.$refs.registerModal
      registerModal.classList.add('register-modal--show')
      registerModal.style.display = 'flex'
    },
    register () {
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$db.collection('users').doc(this.$auth.currentUser.uid).set({
          name: this.name,
          surname: this.surname,
          email: this.email
        })
        .then(() => {
          this.$store.dispatch('login', true)
          this.$store.dispatch('showRegister', false)
          this.$store.dispatch('changeName', this.name)
          this.$store.dispatch('changeSurname', this.surname)
        })
      })
      .catch(error => {
        alert(error.message)
      })
    }
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  }
}
</script>