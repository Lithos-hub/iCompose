<template>
  <div>
      <Spreadsheet :data="exampleData" :headers="headers" />
  </div>
</template>

<script>
import Spreadsheet from '@/components/SpreadSheet.vue';
import exampleData from '@/api/SpreadSheetData';
import { reactive } from 'vue';

export default {
  name: 'Home',
  components: {
    Spreadsheet,
  },
  setup() {
    const headers = reactive(Object.keys(exampleData[0]));
    return {
      headers,
      exampleData,
    };
  },
};
</script>

<style>

</style>
