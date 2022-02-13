<template>
<div class="app-wrapper">
  <Navbar v-if="this.$route.path !== '/'" />
  <router-view />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
@import '@/scss/variables.scss';

@font-face {
  font-family: 'Sarala';
  src: local('Sarala'),
       url('./assets/fonts/Sarala.ttf') format('truetype');
}

* {
  font-family: 'Sarala';
  font-weight: 200;
}

.app-wrapper {
  margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px;
    max-height: 100%;
    background: linear-gradient(120deg, #161616, #1c2c30);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: $secondary;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
    background: #303030;
    border-radius: 0px 0px 0px 50px;
  }

  ::-webkit-scrollbar-corner {
    background: #303030;
    border-radius: 0px 0px 50px 0px;
  }

</style>
