<template>
  <div class="home">
    <h1>Select and show a component</h1>
    <TabMenu :data="componentsList"/>
    <p class="centered" v-if="loading">Loading component...</p>
    <div class="main-container" else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import componentsList from '../api/componentsList';
import TabMenu from '../components/TabMenu.vue';

export default {
  name: 'Home',
  components: {
    TabMenu,
  },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    return {
      componentsList,
      loading,
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
