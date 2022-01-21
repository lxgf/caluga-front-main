<template>
    <div class="wrapper">
      <div class="dark-overlay">
        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
      </div>
      <Header></Header>
      <router-view/>
      <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import LoginModal from "../components/LoginModal";
    import RegisterModal from "../components/RegisterModal";
export default {
    components:{RegisterModal, LoginModal, Header, Footer}
}
</script>

<style>
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
  height: 100vh;
  width: 100vw;
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

input[type='text'] {
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

input[type='text']:focus {
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

@media (min-width: 1100px) {
  .wrapper {
    padding: 6rem;
    margin: 0 auto;
    width: 1080px;
  }
}
</style>