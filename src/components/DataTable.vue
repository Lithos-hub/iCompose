<template>
  <div class="table__wrapper">
    <div class="table__simpleTable--wrapper">
      <table class="mx-auto">
        <thead>
          <tr>
            <th class="table__simpleTable--head" v-for="(head, i) in headers" :key="'A' + i">
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in isShowingByAmount ? data : data.slice(firstRow, lastRow + 1)"  :key="'B' + i">
            <td class="table__simpleTable--cell" v-for="(head, i) in headers" :key="'C' + i">{{ item[head] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table__simpleTable--pagination d-flex justify-between text-center">
      <div class="mr-auto d-flex">
          <p>Rows per page: <input class="table__simpleTable--pagination-input" v-model="rowsPerPage" placeholder="Number" @change="showRowsByAmount"></p>
          <button class="table__simpleTable--pagination-button" @click="resetTable">Reset</button>
      </div>
      <div class="d-flex">
        <div>
        <p>Showing: {{ firstRow }}-{{ lastRow }} of {{ totalRows }} rows</p>
        </div>
          <div class="my-auto ml-3">
            <button class="btn btn-icon mr-1 text--primary" @click="showLessRows">
              <mdicon name="chevron-left" />
            </button>
            <button class="btn btn-icon ml-1 text--primary" @click="showMoreRows">
              <mdicon name="chevron-right" />
            </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue';

const props = defineProps({
  data: Array,
  headers: Array,
});

const data = ref(props.data);
const headers = reactive(props.headers);
const firstRow = ref(1);
const lastRow = ref(10);
const totalRows = ref(data.value.length);
const rowsPerPage = ref(10);
const isShowingByAmount = ref(false);

const showMoreRows = () => {
  if (firstRow.value >= 1 && lastRow.value < totalRows.value) {
    isShowingByAmount.value = false;
    firstRow.value = lastRow.value;
    lastRow.value += 10;
  }
};
const showLessRows = () => {
  if (firstRow.value > 1 && lastRow.value <= totalRows.value) {
    isShowingByAmount.value = false;
    firstRow.value -= 10;
    lastRow.value -= 10;
  }
  if (firstRow.value === 0) firstRow.value = 1;
};

const showRowsByAmount = () => {
  if (rowsPerPage.value >= 1 && rowsPerPage.value <= props.data.length) {
    isShowingByAmount.value = true;
    const dataToSlice = props.data;
    data.value = dataToSlice.slice(0, rowsPerPage.value);
    lastRow.value = parseInt(rowsPerPage.value, 10);
    totalRows.value = parseInt(rowsPerPage.value, 10);
  }
};

const resetTable = () => {
  isShowingByAmount.value = false;
  data.value = props.data;
  firstRow.value = 1;
  lastRow.value = 10;
  totalRows.value = props.data.length;
  rowsPerPage.value = 10;
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.table__wrapper {
  position: relative;
  width: 100%;
}

.table__simpleTable--wrapper {
  overflow-y: scroll;
  overflow-x: scroll;
  height: auto;
  width: 100%;
  max-height: 578px;
  margin: 0 auto;
  border-radius: 40px 0px 0px 0px;
  box-shadow: 0px 1px 3px black, 0px 4px 5px $dark;

  table {
    width: 100%;
    background: white;
    color: #303030;
    padding: 5px;
    border-collapse: collapse;
  }

  th,
  td {
    transition: all 0.3s ease-out;
    margin: 0;
    padding: 0;
    width: auto;
    height: 50px;
    min-height: 55px;

    &:not(th):not(:first-child) {
      box-shadow: 0px 0px 5px #505050;
      min-width: 250px;
    }
    &:first-child {
      min-width: 100px;
      box-shadow: 1px 0px 2px white, 2px 0px 5px $primary;
    }
  }

  th {
    background: $primaryDark;
    color: white;
    height: 50px;

    &:not(:first-child) {
      box-shadow: 0px 1px 2px white, 0px 1px 5px $primary;
    }

    &:first-child {
      border-radius: 0px 0px 0px 0px;
    }
    &:last-child {
      border-radius: 0px 0px 0px 0px;
    }
  }

  td {
    background: white;
    &:first-child {
      background: $primaryDark;
      color: $primary;
    }
    &:hover:not(:first-child) {
      background: #303030;
      color: $primary;
    }
  }

  tr {
    &:hover {
      td:first-child {
        background: $primary;
        color: #303030;
      }
    }
  }
}

.table__simpleTable--pagination {
  position: absolute;
  width: 100%;
}

.table__simpleTable--pagination-input {
  transition: all .3s ease-out;
  background: $primaryDark;
  color: $primary;
  border: none;
  font-size: 15px;
  max-width: 70px;
  max-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid $primaryDark;
  padding: 5px;

  &:focus {
    outline: $primary;
    border: 1px solid $primary;

  }
}

.table__simpleTable--pagination-button {
  transition: all .3s ease-out;
  cursor: pointer;
  background: $secondaryDark;
  color: $primary;
  border: 1px solid $secondary;
  font-size: 15px;
  max-width: 100px;
  max-height: 40px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  margin-block: auto;
  margin-left: 1em;
  padding-inline: 20px;

  &:hover {
    background: none;
    color: white;
    border: 1px solid $primary;
  }
}
</style>
