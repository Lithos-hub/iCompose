<template>
  <div class="row no-bg">
      <div class="col-6 no-borders">
          <FormTable />
      </div>
      <div class="col-6 no-borders">
        <p>Then, select an item from the table to view a dynamic form</p>
          <Form />
      </div>
  </div>
</template>

<script setup>
import FormTable from '@/components/Form-Table.vue';
import Form from '@/components/Form.vue';

</script>
