<template>
  <div class="home">
    <h1>Select and show a component</h1>
    <TabMenu :data="componentsList" @show-component="showComponent" />
    <div>
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
  data() {
    return {
      componentsList,
    };
  },
  methods: {
    showComponent(name) {
      this.$router.push({ path: `/home/${name}` });
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/app.scss';
@import '@/scss/variables.scss';

</style>
