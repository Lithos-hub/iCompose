<template>
  <div class="card__wrapper">
    <div class="card__header">
      <div class="card__image">
        <img src="../assets/img/image5.jpg" />
      </div>
    </div>
    <div class="card__footer">
        <div class="d-flex justify-between">
            <button class="btn btn-icon text--dark"><mdicon name="heart"></mdicon></button>
            <button class="btn btn-icon text--dark"><mdicon name="bell-ring"></mdicon></button>
            <button class="btn btn-icon text--dark"><mdicon name="chat"></mdicon></button>
            <button class="btn btn-icon text--dark"><mdicon name="share-variant"></mdicon></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.card__wrapper {
  padding: 0;
  position: relative;
  background: white;
  box-shadow: 0px 2px 20px #303030;
  color: #d82f6f;
  width: 100%;
  height: 250px;
  border-radius: 10px;
}

.card__header--title {
  font-weight: bold;
  font-size: 18px;
}
.card__header--subtitle {
  font-size: 14px;
}

img {
  width: 100%;
  height: auto;
  max-height: 180px;
  border-radius: 5px 5px 0px 0px;
  object-fit: cover;
}

.card__footer {
    padding: 1em;
}
</style>
