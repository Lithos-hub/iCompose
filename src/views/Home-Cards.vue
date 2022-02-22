<template>
  <div class="row">
    <div class="col">
      <CardVariant1 />
    </div>
    <div class="col">
      <CardVariant2 />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <CardVariant3 />
    </div>
    <div class="col">
    </div>
  </div>
</template>

<script>
import CardVariant1 from '@/components/Card-Variant1.vue';
import CardVariant2 from '@/components/Card-Variant2.vue';
import CardVariant3 from '@/components/Card-Variant3.vue';

export default {
  components:
    {
      CardVariant1,
      CardVariant2,
      CardVariant3,
    },
};
</script>

<style lang="scss">

.row {
  background: rgb(255, 255, 255);
  margin-inline: 10em;
}

</style>
