<template>
  <div class="card-variant3__wrapper">
    <div class="card-variant3__image">
      <img src="../assets/img/image2.jpg" />
      <div class="card-variant3__image--header">
        <div class="image-header__content">My title</div>
        <div>
          <button class="btn btn-icon image-header__button">
            <mdicon name="dots-vertical"></mdicon>
          </button>
        </div>
      </div>
      <div class="card-variant3__image--body d-flex">
        <div class="image-body__avatar">
          <img src="../assets/img/image3.jpg" />
        </div>
        <div class="image-body__content my-auto">@username</div>
      </div>
    </div>
    <div class="card-variant3__body">
      <div class="d-flex justify-between">
        <div>
          <span class="card-variant3__chip">Element 1</span>
        </div>
        <div>
          <span class="card-variant3__chip">Element 2</span>
        </div>
        <div>
          <span class="card-variant3__chip">Element 3</span>
        </div>
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

.card-variant3__wrapper {
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 20px #303030;
  color: #303030;
  max-width: 350px;
  min-height: 500px;
  border-radius: 5px;
}

.card-variant3__image,
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

.card-variant3__image--header {
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
.card-variant3__image--body {
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

.card-variant3__body {
  height: 100%;
  width: 90%;
  padding-top: 10px;
  margin: auto;
}

.row {
  width: 100%;
  border: 1px solid blue;
}

.card-variant3__chip {
  padding: 5px;
  width: auto;
  height: auto;
  padding-inline: 10px;
  background: $secondary;
  color: white;
  border-radius: 10em;
  font-size: 10px;
}
</style>
