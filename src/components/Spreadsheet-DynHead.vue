<template>
  <div>
      {{ computedHeaders }}
  </div>
</template>

<script setup>
import { computed, defineProps, reactive } from 'vue';

const props = defineProps({
  head: String,
});

const headersObj = reactive({
  id: 'ID',
  uid: 'UID',
  vin: 'VIN',
  make_and_model: 'Make and Model',
  color: 'Color',
  transmission: 'Transmission',
  drive_type: 'Drive type',
  fuel_type: 'Fuel type',
  car_type: 'Car type',
  car_options: 'Car options',
  specs: 'Specs',
  doors: 'Doors',
  mileage: 'Mileage',
  kilometrage: 'Kilometrage',
  license_plate: 'License plate',
});

const computedHeaders = computed({
  get() {
    return headersObj[props.head];
  },
});

</script>
