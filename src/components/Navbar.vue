<template>
    <div id="nav">
    <h2 id="app-title">iCompose</h2>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
    <a href="https://github.com/Lithos-hub/iCompose" target="_blank">
      <mdicon class="icon__github" name="github" :width="30" :height="30"></mdicon>
    </a>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '@/scss/app.scss';
@import '@/scss/variables.scss';

#app-title {
    position: fixed;
    top: 0;
    left: 1em;
    font-weight: lighter;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $tertiary;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}

.icon__github {
  position: fixed;
  top: 1em;
  right: 3.8em;
  min-width: 100px;
  max-width: 100px;
  color: $primary;
}

</style>
