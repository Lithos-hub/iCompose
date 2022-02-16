<template>
  <div class="slide__wrapper" @click="usingSimpleSelection = !usingSimpleSelection">
    <span class="slide__label">{{ props.label[usingSimpleSelection] }}</span>
    <input class="switcher" type="checkbox" :value="usingSimpleSelection" />
    <div
      :class="
        usingSimpleSelection
          ? 'slide__track slide__track--active'
          : 'slide__track slide__track--inactive'
      "
    ></div>
    <div
      :class="
        usingSimpleSelection
          ? 'slide__thumb slide__thumb--active'
          : 'slide__thumb slide__thumb--inactive'
      "
    ></div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  label: Object,
});
const usingSimpleSelection = ref(false);
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
</style>
