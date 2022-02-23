<template>
  <div class="card__wrapper">
    <div class="d-flex justify-between">
      <div class="col">
        <div class="card__header">
          <div class="card__header--title">Card title</div>
          <div class="card__header--subtitle">Card subtitle</div>
        </div>
        <div class="card__footer">
            <button id="play-button" class="btn btn-text">
              <span>
                Play radio
              </span>
              <mdicon id="play-icon" name="play" class="mx-auto"></mdicon>
            </button>
        </div>
      </div>
      <div class="col">
        <div class="card__image">
          <img src="../assets/img/image4.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
@import "@/scss/colors.scss";

.card__wrapper {
  padding: 1em;
  text-align: left;
  position: relative;
  background: $secondaryDark;
  box-shadow: 0px 2px 20px #303030;
  color: #d82f6f;
  max-width: 300px;
  width: 100%;
  height: auto;
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
  aspect-ratio: 1;
  min-width: 110px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 2px solid #d82f6f;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
  object-fit: cover;
}

#play-icon {
  transition: all .3s ease-out;
  opacity: 0;
  display: none;
}

.card__footer button {
    transition: all .3s ease-out;
    position: absolute;
    bottom: 1.5em;
    left: 1em;
    width: 130px;
    border-radius: 10em;
    padding: 0;
    background: transparent;
    border: 1px solid $secondary;

    &:hover {
        color: #d82f6f;
        border: 1px solid #d82f6f;

        span {
          display: none;
        }
        #play-icon {
          opacity: 1;
          display: inline;
        }
    }
}

</style>
