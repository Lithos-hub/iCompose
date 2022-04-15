<template>
  <div class="home">
    <TutorialButton v-if="allowedRoutes" id="tutorial__button" />
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
import { useRoute } from 'vue-router';
import componentsList from '../api/componentsList';
import TabMenu from '../components/TabMenu.vue';
import TutorialButton from '../components/TutorialButton.vue';

export default {
  name: 'Home',
  components: {
    TabMenu,
    TutorialButton,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = computed(() => store.state.loading);
    const allowedRoutes = computed(() => route.path === '/spreadsheet');
    return {
      componentsList,
      loading,
      allowedRoutes,
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

#tutorial__button {
  position: fixed;
  top: 20vh;
  right: 10vh;
  z-index: 999999;
}

</style>
