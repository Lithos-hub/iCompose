<template>
  <div>
      <DataTable :data="exampleData" :headers="headers" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue';
import exampleData from '@/api/simpleTableData';
import { reactive } from 'vue';

export default {
  name: 'Home',
  components: {
    DataTable,
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
