<template>
  <div class="card__wrapper">
    <div class="card__header">
      <div class="card__image">
        <img id="parallax-image" src="../assets/img/image6.jpg" data-speed="-1" />
      </div>
    </div>
    <div class="card__footer">
      <div class="card__footer--title">Parallax card title</div>
      <div class="card__footer--subtitle">Card subtitle</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const listenParallax = () => {
  const image = document.querySelector('#parallax-image');

  document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const { speed } = image.dataset;
    const y = scrollTop * speed;
    image.style.transform = `translateY(${y}px)`;
  });
};

onMounted(() => {
  listenParallax();
});

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
  max-width: 350px;
  height: 250px;
  border-radius: 10px;
  z-index: 1;
  overflow: hidden;
}

.card__header {
    z-index: 9;
    background: none;
}

.card__header--title {
  font-weight: bold;
  font-size: 18px;
}
.card__header--subtitle {
  font-size: 14px;
}

.card__image {
  z-index: -1;
  position: relative;
}

img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  width: 500px;
  min-height: 800px;
  object-fit: cover;
  max-height: 180px;
  border-radius: 5px 5px 0px 0px;
}

.card__footer {
    position: absolute;
    bottom: 0.5em;
    text-align: left;
    color: white;
    padding-left: 1em;
    padding-bottom: 5px;
    width: 100%;
    bottom: 0;
    background: rgba(39, 148, 199, 0.192);
    backdrop-filter: blur(3px);
    text-shadow: 1px 1px 1px black;
}

.card__footer--subtitle {
  font-size: 12px;
}
</style>
