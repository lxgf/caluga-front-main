<template>
  <Index/>
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
  background: rgb(41,10,69);
  background: url('assets/images/background.svg'), linear-gradient(205deg, rgb(30 9 49) 0%, rgba(11,12,22,1) 100%);
  background-size: cover;
  background-position: 42% center;
  background-repeat: no-repeat;
  color: white;
  font-family: 'Montserrat ', sans-serif;
}

@media (min-width: 768px) {
  body {
    background-position: center;
    background-size: 60%, 100%;
  }
}

@media (min-width: 1100px) {
  :root {
    font-size: 12px;
  }

  body {
    background-size: 40%, 100%;
  }
}
</style>

<script>

import Index from './views/Index.vue'
export default {
  components: {Index}
}
</script>