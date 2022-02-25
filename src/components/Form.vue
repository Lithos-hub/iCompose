<template>
  <div class="form">
    <div v-if="isLoading" class="spinner__wrapper">
      <Spinner class="centered" />
    </div>
    <div v-if="isLoaded && !isLoading" class="form__wrapper">
      <div class="form__cols" v-for="(item, i) in definition.value" :key="i">
        <label>{{ item.name }}</label>
        <input
          v-if="item.type === 'String'"
          type="text"
          class="form__input"
          :placeholder="item.name"
          v-model="item.value" />
        <input
          v-if="item.type === 'Number'"
          type="number"
          class="form__input"
          :placeholder="item.name"
          v-model="item.value" />
        <input
          v-if="item.type === 'Boolean'"
          type="checkbox"
          class="form__checkbox"
          :placeholder="item.name"
          v-model="item.value" />
        <input
          v-if="item.type === 'Date'"
          type="date"
          class="form__date"
          :placeholder="item.name"
          v-model="item.value" />
        <textarea
          v-if="item.type === 'Textarea'"
          type="textArea"
          class="form__textArea"
          :placeholder="item.name"
          v-model="item.value" />
          <img
          v-if="item.type === 'Image' && item.value"
          class="form__image"
          :src="item.value" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import Spinner from '@/components/Spinner.vue';
import mapState from '../store/mapState';
import Services from '../services/services';

const { formCategory, formObject } = mapState();
const obj = reactive({});
const isLoading = ref(false);
const isLoaded = ref(false);
const entries = reactive([]);
const keys = reactive([]);
const values = reactive([]);
const definition = reactive([]);

const getDefinition = () => {
  Services.getDefinition(formCategory)
    .then((res) => {
      const myObject = obj.value;
      definition.value = res.attributes.map((item) => {
        const myItem = item;
        return {
          name: item.name,
          type: item.type,
          value: myObject[myItem.name],
        };
      });
    });
};

const buildObject = (objectValue) => {
  console.log(objectValue);
  obj.value = objectValue;
};

watch(formObject, (newVal) => {
  isLoading.value = true;
  setTimeout(() => {
    entries.value = Object.entries(newVal);
    keys.value = Object.keys(newVal);
    values.value = Object.values(newVal);
    isLoading.value = false;
    isLoaded.value = true;
    getDefinition();
    buildObject({ ...newVal });
  }, 500);
});
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.form {
  height: 100%;
}

.form__wrapper {
  min-height: 250px;
  width: 100%;
}

.form__cols {
  position: relative;
  display: inline-block;
  margin-block: 20px;
  margin: 5px;
  margin-inline: 25px;
  width: 40%;
}

.chip {
  background: $primaryDark;
  max-height: 25px;
  padding: 10px;
  padding-inline: 30px;
  border-radius: 10em;
  border: 1px solid $primary;
}
label {
  display: block;
  margin-block: 10px;
  font-size: 0.8rem;
  color: white;
}

.spinner__wrapper {
  position: relative;
  background: red;
  top: 20%;
}

.form__input, .form__textArea, .form__date {
  transition: all 0.3s ease-out;
  background: #151515;
  color: $primary;
  border: 1px solid $primary;
  padding-block: 10px;
  padding-inline: 20px;
  border-radius: 10px;
  width: 90%;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px white, 0px 0px 5px $primary, 0px 0px 8px rgb(143, 255, 255);
  }
}

.form__checkbox {
  padding: 5px;
  width: 15px;
  height: 15px;
  background: #151515;
}

.form__date {
  padding: 5px;
  width: 150px;
}

.form__textArea {
  height: auto;
}

.form__image {
  width: 80px;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 100%;
  margin: 0 auto;
  padding: 5px;
  background: white;
  box-shadow: 1px 2px 5px black;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

</style>
