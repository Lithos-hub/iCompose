<template>
  <div>
    <TutorialSpread v-if="showTutorial" />
    <Spreadsheet :data="exampleData" :headers="headers" />
  </div>
</template>

<script setup>
import Spreadsheet from '@/components/SpreadSheet.vue';
import TutorialSpread from '@/components/TutorialSpread.vue';
import exampleData from '@/api/SpreadSheetData';
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const headers = reactive(Object.keys(exampleData[0]));
const store = useStore();
const showTutorial = computed(() => store.state.isShowingTutorial);
</script>
