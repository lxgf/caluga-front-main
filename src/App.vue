<template>
  <div class="wrapper">
    <transition name="fade">
      <div v-if="this.$store.state.isLoginShow" class="dark-overlay">
        <LoginModal></LoginModal>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="this.$store.state.isRegisterShow" class="dark-overlay">
        <RegisterModal></RegisterModal>
      </div>
    </transition>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 10px;
}

body {
  height: 120vh;
  background: rgb(41,10,69);
  background: url('assets/images/background.svg'), linear-gradient(205deg, rgb(30 9 49) 0%, rgba(11,12,22,1) 100%);
  background-size: cover;
  background-position: 42% center;
  background-repeat: no-repeat;
  color: white;
  font-family: 'Montserrat ', sans-serif;
}

/* fade animations */

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.07s 0s ease-in;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.07s 0s ease-out;
}

/* - */

a {
  color: white;
  text-decoration: none;
}

.router-link-active {
  display: none;
}

.wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  font-size: 2.2rem;
  padding: 3.5rem;
}

.dark-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #00000070;
}

.divider {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: #9E00FF68;
  margin-top: 1.4rem;
  margin-bottom: 2rem;
}

input[type='text'], input[type='password'] {
  background: #988C8C62;
  color: #FFFFFF;
  border: 2px solid transparent;
  padding: .8rem 1.6rem;
  border-radius: 2.4rem;
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 2.6rem;
  width: 100%;
  outline: none;
  margin-bottom: 1.2rem;
  transition: all 0.1s 0s ease-in-out;
}

input[type='text']:focus, input[type='password']:focus {
  background: #988C8C84;
  border-color: #ffffff;
}

::selection {
  background: #E465F6FF;
}

::placeholder {
  color: #D7D7D785;
}

.btn {
  cursor: pointer;
  user-select: none;
  background: #988C8C52;
  font-weight: 500;
  font-size: 1.3rem;
  height: fit-content;
  padding: .7rem 1.6rem;
  border-radius: 1.3rem;
  border: 2px solid transparent;
  transition: all 0.2s 0s ease-in-out;
}

.btn--accent {
  background: linear-gradient(180deg, #A254EC 0%, #5E1794 100%);
  padding: .8rem 5rem;
  color: white;
  border: 0;
  border-radius: 2rem;
  font-weight: 900;
  font-size: 1.5rem;
  transition: all 0.3s 0s ease-in-out;
}

.btn:hover {
  background: #988C8C84;
  border-color: #ffffff90;
}

@media (min-width: 768px) {
  body {
    height: 100vh;
    background-position: center;
    background-size: 60%, 100%;
  }
}

@media (min-width: 1100px) {
  :root {
    font-size: 12px;
  }

  .wrapper {
    padding: 6rem;
    margin: 0 auto;
    width: 1080px;
  }

  body {
    background-size: 40%, 100%;
  }
}
</style>

<script>
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {RegisterModal, LoginModal, Header, Footer},
}
</script>