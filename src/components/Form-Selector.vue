<template>
  <div class="selector__wrapper d-flex">
    <label>Select a category: </label>
    <select class="selector" v-model="category" @change="emitValue()">
      <option class="selector__option" v-for="(item, i) in items" :key="i" :value="item.text">{{ item.text }}</option>
    </select>
  </div>
</template>

<script setup>
import defineEmits, { ref } from 'vue';
import { useStore } from 'vuex';
import selectorItems from '../api/selectorItems';

const items = selectorItems;
const category = ref('Commerce');
const emit = defineEmits(['set-category']);
const store = useStore();

const emitValue = () => {
  store.commit('setFormCategory', category.value);
  emit('set-category', category.value.toLowerCase());
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.selector__wrapper {
  position: relative;
}

label {
  margin-right: 2em;
}

.selector {
  text-align: center;
  transition: all .3s ease-out;
  background: #151515;
  color: cyan;
  padding-block: 5px;
  padding-inline: 2em;
  border-radius: 10em;
  min-width: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid $primary;

  &:focus {
    outline: none;
    color: $secondary;
    border: 1px solid $secondary;
  }
}

option {
  padding-inline: 2em;
  text-align: left;
}
</style>
