<template>
  <div>
    <table class="mx-auto">
      <thead>
        <th v-for="(i, index) in numHeaders" :key="'A' + index">COLUMN {{ index + 1 }}</th>
      </thead>
      <tbody>
        <tr v-for="(i, index) in numRows" :key="'B' + index">
          <td v-for="(i, index) in numCells" :key="'C' + index">
            <input class="table__spreadsheet-input" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const numHeaders = ref(5);
    const numRows = ref(10);
    const numCells = ref(5);

    return {
      numHeaders,
      numRows,
      numCells,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
table {
  border: 1px solid white;
  background: #50505050;
}

th {
  border: 1px solid rgba(255, 174, 0, 0.438);
  padding: 5px;
}

td {
  border: 2px solid rgba(0, 255, 255, 0.438);
  padding: 0;
  margin: 0;
}

input:focus {
  outline: none;
}

.table__spreadsheet-input {
  padding: 0;
  margin: 0;
}
</style>
