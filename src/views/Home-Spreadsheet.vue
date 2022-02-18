<template>
  <div>
      <Spreadsheet :data="exampleData" :headers="headers" />
  </div>
</template>

<script>
import Spreadsheet from '@/components/Spreadsheet.vue';
import exampleData from '@/api/SpreadSheetData';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    Spreadsheet,
  },
  setup() {
    const headers = ref(Object.keys(exampleData[0]));
    return {
      headers,
      exampleData,
    };
  },
};
</script>

<style>

</style>
