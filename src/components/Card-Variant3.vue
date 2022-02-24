<template>
  <div class="card__wrapper">
    <div class="card__image">
      <img src="../assets/img/image2.jpg" />
      <div class="card__image--header">
        <div class="image-header__content">Card title</div>
        <div>
          <button class="btn btn-icon image-header__button">
            <mdicon name="dots-vertical"></mdicon>
          </button>
        </div>
      </div>
      <div class="card__image--body d-flex">
        <div class="image-body__avatar">
          <img src="../assets/img/image3.jpg" />
        </div>
        <div class="image-body__content my-auto">@username</div>
      </div>
    </div>
    <div class="card__body">
      <div class="row justify-center">
        <div>
          <span class="card__chip">Chip 1</span>
        </div>
        <div>
          <span class="card__chip">Chip 2</span>
        </div>
        <div>
          <span class="card__chip">Chip 3</span>
        </div>
      </div>
      <div class="row">
        <div class="col-6 no-borders">
          <div class="card__timeline--wrapper">
            <div class="timeline__title">Timeline title</div>
            <div class="card__timeline--line">
              <div class="card__timeline--dot-wrapper d-flex">
                <div class="timeline__dot"></div>
                <span class="timeline__label">Label 1</span>
              </div>
              <div class="card__timeline--dot-wrapper d-flex">
                <div class="timeline__dot"></div>
                <span class="timeline__label">Label 2</span>
              </div>
              <div class="card__timeline--dot-wrapper d-flex">
                <div class="timeline__dot"></div>
                <span class="timeline__label">Label 3</span>
              </div>
              <div class="card__timeline--dot-wrapper d-flex">
                <div class="timeline__dot"></div>
                <span class="timeline__label">Label 4</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 no-borders">
          <div class="card__select--wrapper">
            <div class="select__wrapper d-flex justify-between">
              <div class="select__title">Show info</div>
              <button class="btn btn-icon black--text" @click="showSelectOptions">
                <mdicon :name="isShowingOptions ? 'chevron-up' : 'chevron-down'"></mdicon>
              </button>
            </div>
            <div class="select__content" v-if="isShowingOptions">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad perspiciatis animi saepe nulla aliquam maiores aspernatur! Necessitatibus, laboriosam tempora.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isShowingOptions = ref(false);

const showSelectOptions = () => {
  let selectContent = null;
  if (!isShowingOptions.value) {
    isShowingOptions.value = true;
    setTimeout(() => {
      selectContent = document.querySelector('.select__content');
      selectContent.style.transition = 'all .3s ease-out';
      selectContent.style.opacity = 1;
      selectContent.style.transform = 'translateY(0%)';
    }, 300);
  } else {
    selectContent = document.querySelector('.select__content');
    selectContent.style.transition = 'all .3s ease-out';
    selectContent.style.opacity = 0;
    selectContent.style.transform = 'translateY(100%)';
    setTimeout(() => {
      isShowingOptions.value = false;
    }, 300);
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.card__wrapper {
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 20px #303030;
  color: #303030;
  max-width: 350px;
  min-height: 500px;
  border-radius: 5px;
}

.card__image,
img {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 15em;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
}

.card__image--header {
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 20px;
  text-align: left;
  padding-block: 1em;
  font-weight: bold;
  background: rgba(128, 128, 128, 0.356);
  backdrop-filter: blur(2px);
  border-radius: 5px 5px 0px 0px;
}

.image-header__content {
  padding-left: 2em;
  text-shadow: 1px 1px 2px black;
}
.image-header__button {
  background: transparent;
  border: none;
  color: white;
  position: absolute;
  top: 2em;
  right: 1em;
}
.card__image--body {
  position: absolute;
  bottom: 1em;
  left: 1em;
}

.image-body__avatar img {
  border-radius: 100%;
  width: 4em;
  height: 4em;
  object-fit: cover;
}

.image-body__content {
  color: white;
  font-size: 18px;
  padding-left: 0.5em;
}

.card__chip {
  transition: all 0.3s ease-out;
  cursor: pointer;
  padding: 5px;
  width: auto;
  height: auto;
  padding-inline: 10px;
  background: $secondary;
  color: white;
  border-radius: 10em;
  margin-inline: 5px;
  font-size: 10px;
  box-shadow: 1px 1px 2px #30303075;

  &:hover {
    filter: brightness(1.5);
  }
}

.card__body {
  padding: 10px;
}

.card__timeline--wrapper {
  margin-left: 1em;
  text-align: center;
}

.timeline__title {
  transform: translateX(-50%);
  text-align: center;
  margin-left: 2em;
  font-weight: bold;
}

.card__timeline--line {
  height: 10em;
  width: 2px;
  border-radius: 5px;
  position: relative;
  margin-left: 2em;
  padding-top: 25px;
  background: #3030306c;
}

.card__timeline--dot-wrapper {
  padding-block: 0.5em;
  position: relative;
}

.timeline__dot {
  transition: all .3s ease-out;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  background: $secondary;
  border-radius: 50%;
  box-shadow: 1px 1px 2px #30303075;

  &:hover {
    filter: brightness(1.5);
  }
}

.timeline__label {
  font-size: 12px;
  margin-block: auto;
  margin-left: 2em;
  min-width: 8em;
  width: auto;
  text-align: left;
}

.select__title {
  color: $secondary;
}

.select__content {
  margin-top: 10px;
  font-size: 12px;
  text-align: justify;
  opacity: 0;
  transform: translateY(-100%);
  line-height: 15px;
}

</style>
