<template>
  <button :class="showTutorial ? 'isShowing' : 'isHiding'" @click="toggleTutorial()">{{ showTutorial ? 'Hide tutorial' : 'Show tutorial' }}</button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const toggleTutorial = () => {
  store.commit('toggleTutorial');
};

const showTutorial = computed(() => store.state.isShowingTutorial);

</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

button {
    font-size: 1.1rem;
    padding-inline: 25px;
    border-radius: 5px;
    margin: 0;
    cursor: pointer;
    outline: none;
    transition: all .3s ease-out;

    &:hover {
        background: #151515;
        color: white;
        border: 1px solid white;
    }
}

.isShowing {
    background: none;
    color: magenta;
    border: 1px solid magenta;
}

.isHiding {
    background: none;
    border: 1px solid cyan;
    color: cyan;
}

</style>
