<template>
  <div class="dialog__overlay">
    <div class="dialog__spreadsheet">
      <div class="dialog__spreadsheet--title gradient--secondary">
        <div>Table options</div>
        <div>
          <mdicon class="btn btn-icon" name="close" @click="closeDialog" />
        </div>
      </div>
      <div class="dialog__spreadsheet--body">
        <div class="row">
          <div class="col">
            <div class="text-h6 dialog__spreadsheet-subtitles gradient--primary">Row options</div>
          </div>
          <div class="col">
            <div class="text-h6 dialog__spreadsheet-subtitles gradient--primary">Column options</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text--secondary">Use simple selection</p>
            <Switch v-model="isUsingSimpleRow" class="mx-auto" :label="label" :state-name="'setSimpleRow'" />
            <p class="text--secondary">Use multiple selection</p>
            <Switch v-model="isUsingMultipleRow" class="mx-auto" :label="label" :state-name="'setMultipleRow'" />
          </div>
          <div class="col">
            <p class="text--secondary">Use simple selection</p>
            <Switch v-model="isUsingSimpleCol" class="mx-auto" :label="label" :state-name="'setSimpleCol'" />
            <p class="text--secondary">Use multiple selection</p>
            <Switch v-model="isUsingMultipleCol" class="mx-auto" :label="label" :state-name="'setMultipleCol'" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-h6 dialog__spreadsheet-subtitles gradient--primary">Header options</div>
            <div class="row">
              <div class="col">
                <p class="text--secondary">Enable sorting</p>
                <Switch v-model="isUsingSorting" class="mx-auto" :label="label" :state-name="'setSorting'" />
              </div>
              <div class="col">
                <p class="text--secondary">Enable filtering</p>
                <Switch v-model="isUsingFiltering" class="mx-auto" :label="label" :state-name="'setFiltering'" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex dialog__spreadsheet--actions">
      <button class="btn btn-text secondary-button ml-auto mr-3" @click="closeDialog">Finish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, reactive } from 'vue';
import mapState from '../store/mapState';
import Switch from './Switch.vue';

const emit = defineEmits(['close-dialog']);

const {
  isUsingSimpleRow,
  isUsingMultipleRow,
  isUsingSimpleCol,
  isUsingMultipleCol,
  isUsingFiltering,
  isUsingSorting,
} = mapState();

const label = reactive({
  true: 'Active',
  false: 'Inactive',
});

const closeDialog = () => {
  emit('closeDialog', false);
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.dialog__overlay {
  z-index: 9999;
  background: #07031acc;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.dialog__spreadsheet {
  z-index: 999;
  opacity: 0;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: white;
  height: 500px;
  width: 700px;
  box-shadow: 0px 0px 50px black;
}

.dialog__spreadsheet--title {
  border-radius: 20px 20px 0 0;
  color: white;
  padding: 20px;
  font-size: 20px;
  text-align: left;
  padding-inline: 20px;
  border: 2px solid black;
  box-shadow: inset 0px 0px 10px black;
  display: flex;
  justify-content: space-between;
}

.dialog__spreadsheet--body {
  padding: 5px;
  margin: 10px;
}

.dialog__spreadsheet--actions {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-block: 10px;
}

.dialog__spreadsheet-subtitles {
  position: relative;
  width: 100%;
  color: white;
  box-shadow: 0px 2px 5px #505050;
}
</style>
