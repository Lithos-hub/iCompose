<template>
  <div class="slide__wrapper">
    <input btn class="switcher" type="checkbox" v-model="model"/>
    <div :class="modelValue ? 'slide__track slide__track--active' : 'slide__track slide__track--inactive'"></div>
    <div :class="modelValue ? 'slide__thumb slide__thumb--active' : 'slide__thumb slide__thumb--inactive'"></div>
    <span class="slide__label">{{ props.label[modelValue] }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  label: Object,
  stateName: String,
  modelValue: Boolean,
});

// const emit = defineEmits(['update:modelValue']);
const store = useStore();

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    const { stateName } = props;
    store.commit(stateName, value);
  },
});

</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

// * Custom Switch * //

.slide__wrapper {
    position: relative;
    max-height: 10px;
    max-width: 30px;
    padding-inline: 2px;

            &:hover .slide__thumb::after {
            opacity: 1;
        }

    .switcher {
        position: absolute;
        opacity: 0;
        max-width: 30px ;
        height: 30px;
        top: 0%;
        left: 35%;
        transform: translate(-50%, -50%);
        z-index: 9;
    }

    .slide__label {
        position: relative;
        bottom: 1.2em;
        font-size: 10px;
        color: $secondary;
        left: 4em;
    }

    .slide__track {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 8px;
        border-radius: 5px;
        width: 30px;
        clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0% 100%);
    }
    .slide__thumb {
        transition: all .3s ease-out;
        position: absolute;
        top: 20%;
        transform: translate(-50%, -50%);
        height: 14px;
        width: 15px;
        border-radius: 50%;

            &::after {
            transition: all .3s ease-out;
            content: "";
            position: absolute;
            opacity: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 25px;
            width: 25px;
            background: #735c7c69;
            border-radius: 50%;
        }

    }

    .slide__track--inactive {
        background: #cbbaff;
    }
    .slide__thumb--inactive {
        background: #8e7ac4;
        left: 20%;
    }
    .slide__track--active {
        background: #20095f;
    }
    .slide__thumb--active {
        left: 80%;
        background: $secondary;
    }

}

</style>
