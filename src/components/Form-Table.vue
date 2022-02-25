<template>
  <div class="row no-bg">
    <div class="col-12 no-borders">
      <FormSelector @set-category="setCategory" />
    </div>
  </div>
  <div class="row no-bg">
    <div class="col-12 no-borders">
      <div class="table__wrapper">
      <table id="form-table">
        <thead>
          <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
        </thead>
        <tbody>
          <tr v-for="(item, j) in listToRender" :key="j" @click="getSelectedItem(item); selectRow(j)">
              <td v-for="(head, h) in headers" :key="h">
                <span v-if="item[head] !== true && item[head] !== false">{{ item[head] }}</span>
                <span v-else>
                  <mdicon class="checkIcon" v-if="item[head] === true" name="check-circle"></mdicon>
                  <mdicon class="closeIcon" v-if="item[head] === false" name="close-circle"></mdicon>
                </span>
              </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import commerce from '@/api/Commerce';
import users from '@/api/Users';
import food from '@/api/Food';
import FormSelector from '@/components/Form-Selector.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

const dataLists = {
  commerce,
  users,
  food,
};

const store = useStore();
let itemToSend = ref({});

const getSelectedItem = (item) => {
  itemToSend = item;
  store.commit('setFormObject', { ...itemToSend });
};

let category = ref('commerce');
const headers = ref(Object.keys(dataLists[category.value][0]));
const listToRender = ref(dataLists[category.value]);

const setCategory = (cat) => {
  store.commit('setFormObject', {});
  setTimeout(() => {
    const table = document.querySelector('#form-table');
    const tr = table.querySelectorAll('tr');
    tr.forEach((row) => row.classList.remove('selected-row'));
    category = cat;
    headers.value = Object.keys(dataLists[category][0]);
    listToRender.value = dataLists[category];
  }, 1000);
};

const selectRow = (index) => {
  const table = document.querySelector('#form-table');
  const tr = table.querySelectorAll('tr');
  tr.forEach((row) => row.classList.remove('selected-row'));
  tr[index].classList.add('selected-row');
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.table__wrapper {
  max-width: 100%;
  max-height: 500px;
  overflow: scroll;
  border: 1px solid #151515;
  border-radius: 25px 0px 0px 0px;
}

table {
  border-collapse: collapse;
  background: none;
  border: 1px solid $secondary;
  font-size: 12px;
}

th {
  padding-inline: 20px;
  padding-block: 5px;
  background: $primaryDark;
  position: sticky;
  top: 0;

  &:first-child {
    border-radius: 25px 0px 0px 0px;
  }
}

tr {
  transition: .3s ease-out;
  cursor: pointer;
  min-height: 50px;

  &:hover {

    td {
      background: rgba(82, 180, 180, 0.13);
    }
  }
}

tr:nth-child(even) {
  background: rgba(79, 130, 224, 0.247);
  color: #d9e3e4;
}
tr:nth-child(odd) {
  background: rgba(9, 15, 26, 0.87);
  color: cyan;
}

td, th {
  border: 1px solid #1515151e;
  min-width: 50px;
}

th:not(:last-child), td:not(:last-child) {
  border-right: 1px solid #0000000e;
}

.checkIcon {
  color: rgb(78, 185, 78);
}
.closeIcon {
  color: rgb(185, 78, 78);
}
#form-table .selected-row {
  background: linear-gradient(90deg, #00ff37 50%, transparent 50%), linear-gradient(90deg, #00ff37 50%, transparent 50%), linear-gradient(0deg, #00ff37 50%, transparent 50%), linear-gradient(0deg, #00ff37 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
  background-position: 0px 0px, 100% 100%, 0px 100%, 100% 0%;
  animation: zebraBorder 12s infinite linear;
}

@keyframes zebraBorder {
 0% {
    background-position: 0% 0%, 50% 100%, 0% 100%, 100% 0%;
  }
  100% {
    background-position: 50% 0%, 0% 100%, 0% 0%, 100% 100%;
  }
}
</style>
