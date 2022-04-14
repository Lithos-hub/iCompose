<template>
  <div class="home">
    <TutorialButton id="tutorial__button" />
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
import TutorialButton from '../components/TutorialButton.vue';

export default {
  name: 'Home',
  components: {
    TabMenu,
    TutorialButton,
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

#tutorial__button {
  position: fixed;
  top: 20vh;
  right: 10vh;
  z-index: 999999;
}

</style>
