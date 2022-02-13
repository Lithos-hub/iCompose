<template>
  <div class="home">
    <h1>Select and show a component</h1>
    <TabMenu :data="componentsList"/>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import componentsList from '../api/componentsList';
import TabMenu from '../components/TabMenu.vue';

export default {
  name: 'Home',
  components: {
    TabMenu,
  },
  setup() {
    return {
      componentsList,
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
@import '@/scss/variables.scss';

.main-container {
  margin-top: 5em;
  margin-inline: 5em;
}

</style>
