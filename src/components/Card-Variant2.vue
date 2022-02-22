<template>
  <div class="card-variant2__wrapper">
    <div class="card-variant2__image">
      <img src="../assets/img/image.jpg" />
    </div>
    <div class="card-variant2__header">
      <div class="card-variant2__header--title">My title</div>
      <div class="card-variant2__header--subtitle">My subtitle</div>
    </div>
    <div class="card-variant2__body">
      <div class="card-variant2__body--text">
        <div id="body-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis autem sequi recusandae similique maiores voluptatem quae, nam
          dignissimos corrupti cumque, eaque natus temporibus veritatis quis incidunt facere officia. Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
    <div class="card-variant2__footer">
      <button class="card__animated-btn" @click="createFXElement">
        Action button
        <span id="ripple-element" class="ripple"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const createFXElement = (e) => {
  const button = document.querySelector('.card__animated-btn');
  const rippleElement = document.querySelector('#ripple-element');
  const boundingBox = button.getBoundingClientRect();
  const x = e.clientX - boundingBox.left;
  const y = e.clientY - boundingBox.top;
  rippleElement.style.display = 'block';
  rippleElement.classList.add('ripple');
  rippleElement.style.left = `${x}px`;
  rippleElement.style.top = `${y}px`;
  button.appendChild(rippleElement);

  setTimeout(() => {
    rippleElement.style.display = 'none';
  }, 500);
};

onMounted(() => {
  const rippleElement = document.querySelector('#ripple-element');
  rippleElement.style.display = 'none';
});
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.card-variant2__wrapper {
  position: relative;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 2px 20px #303030;
  color: #303030;
}

.card-variant2__image,
img {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
}

.card-variant2__header {
  text-align: right;
  padding-right: 1em;
  color: #3892a4;
}

.card-variant2__header--title {
  text-shadow: 1px 2px 2px #b0add4;
}

.card-variant2__header--subtitle {
  color: #505050;
}

.card-variant2__body {
  padding-bottom: 2em;
}

#body-text {
  padding-inline: 1em;
  margin-bottom: 2em;
  text-align: justify;
  color: #303030;
}

.card-variant2__footer {
  position: absolute;
  margin-top: 2em;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: right;
}

.card__animated-btn {
  position: relative;
  color: white;

  font-size: 1rem;
  line-height: 2rem;
  margin: 15px;
  border: none;
  border-radius: 10rem;
  padding: 0.3rem 2rem;
  border: 1px solid #3892a4;
  background-color: #3892a4;

  cursor: pointer;
  outline: none;
  overflow: hidden;
  transition: 0.3s;
  box-shadow: inset 0px -2px 3px #0000003d, inset 0px -2px 5px rgba(126, 214, 255, 0.658);

  &:hover {
    border: 1px solid #74e3ff3d;
    box-shadow: inset 0px -5px 10px #74e3ff3d, inset 0px -3px 30px rgba(95, 203, 211, 0.658);
  }
}

.ripple {
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;

  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;

  pointer-events: none;
  opacity: 0.5;
  animation: ripple 0.5s linear;
}

@keyframes ripple {
  to {
    width: 15rem;
    height: 15rem;
    opacity: 0;
  }
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  .card-variant2__image,
  img {
    position: relative;
    height: auto;
    max-height: 6em;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }

  .card-variant2__header {
    text-align: center;
    padding-left: 0em;
    padding-right: 0em;
  }

  .card-variant2__header--title {
    font-size: 25px;
  }

  .card-variant2__header--subtitle {
    font-size: 8px;
  }

  .card-variant2__body {
    font-size: 12px;
    padding-bottom: 2em;
  }

  #body-text {
    margin-left: 1em;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 1366px) {
  .card-variant2__image,
  img {
    position: relative;
    height: auto;
    max-height: 6em;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }

  .card-variant2__header {
    text-align: left;
    padding-left: 1em;
    padding-right: 0em;
  }

  .card-variant2__header--title {
    font-size: 30px;
  }

  .card-variant2__header--subtitle {
    font-size: 10px;
  }

  .card-variant2__body {
    font-size: 15px;
    padding-bottom: 2em;
  }

  #body-text {
    margin-left: 1em;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1920px) {
  .card-variant2__image,
  img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100%;
    height: 100%;
    width: 15em;
    object-fit: cover;
    border-radius: 20px 0px 0px 20px;
  }

  .card-variant2__header {
    text-align: right;
    padding-left: 0em;
    padding-right: 1em;
  }

  .card-variant2__header--title {
    font-size: 40px;
  }

  .card-variant2__header--subtitle {
    font-size: 13px;
  }

  .card-variant2__body {
    font-size: 16px;
    padding-bottom: 2em;
  }

  #body-text {
    margin-left: 15em;
  }
}
</style>
