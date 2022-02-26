<template>
<div class="home-cards">
  <div class="row">
    <div class="col-6">
      <CardVariant1 />
    </div>
    <div class="col-6">
      <CardVariant2 />
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <CardVariant3 class="mx-auto" />
    </div>
    <div class="col-3">
      <CardVariant4 class="mx-auto" />
    </div>
    <div class="col-3">
      <CardVariant5 class="mx-auto" />
    </div>
    <div class="col-3">
      <CardVariant6 class="mx-auto" />
    </div>
  </div>
</div>
</template>

<script>
import CardVariant1 from '@/components/Card-Variant1.vue';
import CardVariant2 from '@/components/Card-Variant2.vue';
import CardVariant3 from '@/components/Card-Variant3.vue';
import CardVariant4 from '@/components/Card-Variant4.vue';
import CardVariant5 from '@/components/Card-Variant5.vue';
import CardVariant6 from '@/components/Card-Variant6.vue';

export default {
  components:
    {
      CardVariant1,
      CardVariant2,
      CardVariant3,
      CardVariant4,
      CardVariant5,
      CardVariant6,
    },
};
</script>

<style lang="scss" scoped>

.row {
  background: rgb(255, 255, 255);
}

.home-cards {
  padding-bottom: 10em;
}

</style>
