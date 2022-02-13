<template>
  <div class="table__spreadsheet-wrap">
    <table class="mx-auto">
      <thead class="table__spreadsheet-header">
        <tr>
          <th
            v-for="(char, index) in alphabet.split('_')"
            :key="index"
            class="table__spreadsheet-header-alphabet"
            @click="selectColumn(index)"
          >
            {{ char }}
          </th>
        </tr>
        <tr>
          <th></th>
          <th v-for="(i, index) in numHeaders" :key="'A' + index">
            HEAD {{ index + 1 }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, rowIndex) in numRows" :key="'B' + rowIndex">
          <td class="table__spreadsheet-index" @click="selectRow(i)">{{ i }}</td>
          <td v-for="(i, colIndex) in numCells" :key="'C' + colIndex">
            <input :class="'row-' + rowIndex + ' col-' + colIndex" />
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
    const numHeaders = ref(26);
    const numRows = ref(50);
    const numCells = ref(26);
    // alphabet A to Z joined with _
    const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').join('_');
    const selectRow = (index) => {
      const ROW_HTML = document.querySelectorAll(`.row-${index - 1}`);
      ROW_HTML.forEach((row) => {
        const rowToSelect = row;
        if (!rowToSelect.classList.contains('table__spreadsheet--active-row')) {
          rowToSelect.classList.add('table__spreadsheet--active-row');
        } else {
          rowToSelect.classList.remove('table__spreadsheet--active-row');
        }
      });
    };
    const selectColumn = (index) => {
      const COL_HTML = document.querySelectorAll(`.col-${index - 1}`);
      COL_HTML.forEach((col) => {
        const colToSelected = col;
        if (!colToSelected.classList.contains('table__spreadsheet--active-col')) {
          colToSelected.classList.add('table__spreadsheet--active-col');
        } else {
          colToSelected.classList.remove('table__spreadsheet--active-col');
        }
      });
    };
    return {
      alphabet,
      numHeaders,
      numRows,
      numCells,
      selectRow,
      selectColumn,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.table__spreadsheet-wrap {
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 600px;
  max-width: auto;
  margin: 0 auto;
  border-radius: 50px 0px 10px 20px;
  border: 5px solid $dark;
  box-shadow: 0px 1px 3px black, 0px 4px 5px $dark;
}

table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
  border-radius: 50px 0px 0px 0px;

}

.table__spreadsheet-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: $dark;

  th {
    color: $secondary;
  }
}

tr {
  border: none;
}

input, td {
  height: 40px;
  border: none;
  padding: 0;
  max-width: 170px;
  border-right: 1px solid $tertiary;
  border-bottom: 1px solid $tertiary;
}

input:focus {
  outline: none;
}
.table__spreadsheet-header-alphabet {
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    color: white;
    background: $twilight;
  }
}
.table__spreadsheet-index {
  transition: all .3s ease-out;
  cursor: pointer;
  min-width: 40px;
  height: auto;
  background: $dark;
  border-bottom: 1px solid $secondary;

    &:hover {
    color: white;
    background: $twilight;
  }
}

.table__spreadsheet-input {
  padding: 0;
  margin: 0;
}

.table__spreadsheet--active-row,
input:focus {
  animation: pulse 1s ease-in-out infinite;
}

.table__spreadsheet--active-col,
  input:focus {
  animation: pulse 1s ease-in-out infinite;
}
</style>
