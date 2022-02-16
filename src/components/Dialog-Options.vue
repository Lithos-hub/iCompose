<template>
  <div class="dialog__overlay">
    <div class="dialog__spreadsheet">
      <div class="dialog__spreadsheet--title gradient-primary">
        <div>Table options</div>
        <div>
          <mdicon class="btn" name="close" @click="closeDialog" />
        </div>
      </div>
      <div class="dialog__spreadsheet--body">
        <div class="row">
          <div class="col">
            <div class="text-h6 dialog__spreadsheet-subtitles">Row options</div>
          </div>
          <div class="col">
            <div class="text-h6 dialog__spreadsheet-subtitles">Column options</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text--secondary">Use simple selection</p>
            <Switch v-model="isUsingSimpleRow" class="mx-auto" :label="label" />
            <p class="text--secondary">Use multiple selection</p>
            <Switch v-model="isUsingMultipleRow" class="mx-auto" :label="label" />
          </div>
          <div class="col">
            <p class="text--secondary">Use simple selection</p>
            <Switch v-model="isUsingSimpleCol" class="mx-auto" :label="label" />
            <p class="text--secondary">Use multiple selection</p>
            <Switch v-model="isUsingMultipleCol" class="mx-auto" :label="label" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import Switch from './Switch.vue';

const label = ref({
  true: 'Active',
  false: 'Inactive',
});

const emit = defineEmits(['close-dialog']);

const closeDialog = () => {
  emit('closeDialog', false);
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

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
  background: #202020;
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

.dialog__spreadsheet-subtitles {
  position: relative;
  width: 100%;
  background: $secondary;
  color: white;
  box-shadow: 0px 2px 5px #505050;
}
</style>
