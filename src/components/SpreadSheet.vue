<template>
  <div class="table__spreadsheet-wrap">
    <DialogOptions v-if="isShowingOptions" @close-dialog="hide" />
    <table class="mx-auto">
      <thead class="table__spreadsheet-header">
        <tr>
          <th class="table__spreadsheet-header--showOptions" @click="show">
            <mdicon name="cog" />
          </th>
          <th
            v-for="(char, index) in alphabet"
            :key="index"
            class="table__spreadsheet-header--alphabet"
            @click="selectColumn(index)"
          >
            {{ char }}
          </th>
        </tr>
        <tr>
          <th class="table__spreadsheet-header--download" @click="downloadExcel">
            <mdicon name="file-excel" />
          </th>
          <th v-for="(i, index) in numHeaders" :key="'A' + index">HEAD {{ index + 1 }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, rowIndex) in numRows" :key="'B' + rowIndex">
          <td class="table__spreadsheet-index" @click="selectRow(i)">{{ i }}</td>
          <td v-for="(i, colIndex) in numCells" :key="'C' + colIndex">
            <input
              :class="`cell__col-${zeroPad(colIndex + 1, 2)} cell__row-${zeroPad(rowIndex + 1, 2)}`"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import DialogOptions from '@/components/Dialog-Options.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import useDialog from '../composables/useDialog';

const store = useStore();
const { isShowingOptions, show, hide } = useDialog();
store.commit('setLoading', true);

const numHeaders = ref(30);
const numRows = ref(20);
const numCells = ref(30);

let initialCol = 0;
let initialRow = 0;
let finalCol = 0;
let finalRow = 0;
let pasteInformation = '';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const listenCopyPaste = () => {
  document.addEventListener('paste', (event) => {
    pasteInformation = (event.clipboardData || window.clipboardData).getData('text');
    const cleanPaste1 = pasteInformation
      .replaceAll('\r', '---')
      .replaceAll('\t', '---')
      .replaceAll('\t\r', '---')
      .replaceAll('\n', '');

    const splittedPaste = cleanPaste1.split('---');
    const selectedCellsHTML = document.querySelectorAll('.cell-selection');
    selectedCellsHTML.forEach((cell, index) => {
      if (cell.tagName === 'INPUT') {
        const cellToProcess = cell;
        cellToProcess.value = splittedPaste[index] ? splittedPaste[index] : '';
      }
    });
    event.preventDefault();
  });
};

const listenMouseSelectable = () => {
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: `${rect.left + window.scrollX}px`,
      top: `${rect.top + window.scrollY}px`,
    };
  }
  const table = document.querySelector('tbody');
  let initialCell = '';
  let finalCell = '';

  table.addEventListener('mousedown', ({ target }) => {
    // ? Clean process ? //
    initialCell = '';
    finalCell = '';
    const allInputsHTML = document.querySelectorAll('input');

    allInputsHTML.forEach((input) => {
      if (input.classList.contains('cell-selection')) {
        input.classList.remove('cell-selection');
      }
    });

    const activeRows = document.querySelectorAll('.table__spreadsheet--active-row');
    activeRows.forEach((element) => {
      const elementToProcess = element;
      elementToProcess.classList.remove('table__spreadsheet--active-row');
    });
    const activeCols = document.querySelectorAll('.table__spreadsheet--active-col');
    activeCols.forEach((element) => {
      const elementToProcess = element;
      elementToProcess.classList.remove('table__spreadsheet--active-col');
    });
    // ? End clean process ? //
    // ? Selection area creation ? //
    const div = document.createElement('div');
    table.appendChild(div);
    div.classList.add('drag-div');
    const dragDiv = document.querySelector('.drag-div');
    dragDiv.style.position = 'fixed';
    dragDiv.style.background = 'transparent';
    dragDiv.style.top = getOffset(target).top;
    dragDiv.style.left = getOffset(target).left;
    // ? End selection area creation ? //
    // ? First cell selected assignation ? //
    if (target.className.includes('cell__col')) {
      initialCell = target.className;
      finalCell = target.className;
    }
    // ? End first cell selected assignation ? //

    table.addEventListener('mousemove', (event) => {
      // ? Selection area drawing when mouseover ? //
      table.style.cursor = 'pointer';
      dragDiv.style.border = '2px dashed #5340ff';
      dragDiv.style.width = `${(event.clientX) - dragDiv.offsetLeft}px`;
      dragDiv.style.height = `${(event.clientY) - dragDiv.offsetTop}px`;
      if (event.target.className.includes('cell__col')) {
        finalCell = event.target.className;
      }
    });
    // ? End selection area drawing when mouseover ? //
  });

  // ? When mouse up => we remove selection area and select the cells ? //
  table.addEventListener('mouseup', () => {
    const div = document.querySelector('.drag-div');
    if (div) div.remove();
    setTimeout(() => {
      // eslint-disable-next-line prefer-destructuring
      initialCol = initialCell.split('cell__col-')[1].split(' ')[0];
      // eslint-disable-next-line prefer-destructuring
      initialRow = initialCell.split('cell__row-')[1].split(' ')[0];
      // eslint-disable-next-line prefer-destructuring
      finalCol = finalCell.split('cell__col-')[1].split(' ')[0];
      // eslint-disable-next-line prefer-destructuring
      finalRow = finalCell.split('cell__row-')[1].split(' ')[0];
      // eslint-disable-next-line no-plusplus
      for (let i = initialCol; i <= finalCol; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = initialRow; j <= finalRow; j++) {
          const cellsSelected = document.querySelector(
            `.cell__col-${zeroPad(i, 2)}.cell__row-${zeroPad(j, 2)}`,
          );
          cellsSelected.classList.add('cell-selection');
        }
      }
    }, 50);
  });
};

const selectRow = (index) => {
  const ROW_HTML = document.querySelectorAll(`.cell__row-${zeroPad(index, 2)}`);
  ROW_HTML.forEach((row) => {
    const rowToSelect = row;
    if (rowToSelect.classList.contains('cell-selection')) {
      rowToSelect.classList.remove('cell-selection');
    } else {
      rowToSelect.classList.add('cell-selection');
    }
  });
};

const selectColumn = (index) => {
  let colToSelect;
  const COL_HTML = document.querySelectorAll(`.cell__col-${zeroPad(index + 1, 2)}`);
  COL_HTML.forEach((col) => {
    colToSelect = col;
    colToSelect.classList.toggle('cell-selection');
  });
};

const generateAlphabet = () => {
  const alpha = [];
  const alphabetChars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
  let counterLoop = 0;
  const numLoops = Math.floor(numHeaders.value / 26);

  alphabetChars.forEach((char, index) => {
    alpha.push(char);

    while (index === alphabetChars.length - 1 && counterLoop < numLoops) {
      for (let j = 0; j < alphabetChars.length; j += 1) {
        alpha.push(alphabetChars[counterLoop] + alphabetChars[j]);
      }
      counterLoop += 1;
    }
  });
  return alpha.slice(0, numHeaders.value);
};

const alphabet = ref(generateAlphabet());

const downloadExcel = () => {
  console.log('Downloading...');
};
onMounted(() => {
  listenCopyPaste();
  listenMouseSelectable();
  store.commit('setLoading', false);
});
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
  border-radius: 20px 0px 20px 20px;
  border: 5px solid $dark;
  box-shadow: 0px 1px 3px black, 0px 4px 5px $dark;
}

table {
  position: relative;
  width: 100%;
  border-collapse: collapse;
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

input,
td {
  cursor: pointer;
  text-align: center;
  height: 40px;
  border: none;
  padding: 0;
  max-width: 170px;
  border-right: 1px solid $tertiary;
  border-bottom: 1px solid $tertiary;
}

.table__spreadsheet-header--showOptions {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: $secondary;
  width: auto;
  height: 40px;

  &:hover {
    border-radius: 50px;
    background: #bb66b4;
    color: white;
  }
}
.table__spreadsheet-header--download {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: $secondary;
  width: auto;
  height: 40px;

  &:hover {
    border-radius: 50px;
    background: #66BB6A;
    color: white;
  }
}

.table__spreadsheet-header--alphabet {
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover:not(:first-child) {
    color: white;
    background: $twilight;
  }
}
.table__spreadsheet-index {
  transition: all 0.3s ease-out;
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

input:focus {
  outline: none;
  animation: pulse .5s ease-in-out infinite alternate;
}

.table__spreadsheet--active-row {
  background: red;
  animation: pulse .5s ease-in-out infinite alternate;
}

.table__spreadsheet--active-col {
  animation: pulse .5s ease-in-out infinite alternate;
}

.cell-selection {
  animation: pulse .5s ease-in-out infinite alternate;
  input {
    color: white;
  }
}
</style>
