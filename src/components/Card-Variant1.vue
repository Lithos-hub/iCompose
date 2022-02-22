<template>
<div class="card-variant1__wrapper">
    <div class="card-variant1__header">
    <div class="card-variant1__header--title">My title</div>
    <hr class="header-divider" />
    <div class="card-variant1__header--subtitle">My subtitle</div>
    </div>
    <div class="card-variant1__body">
    <div class="card-variant1__body--text">
        <div id="body-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse maiores vero officia nesciunt minima, iste corporis,
        consequatur magni molestiae similique voluptates mollitia cum nulla commodi ad nihil. Aliquid at enim incidunt earum maxime ducimus
        culpa reiciendis id. Voluptates quis magni.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus tenetur quia, voluptatum at culpa veniam dignissimos
        debitis odit quisquam?
        </div>
    </div>
    </div>
    <div class="card-variant1__footer">
    <button class="card-variant1__footer--button">Action button</button>
    </div>
</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.card-variant1__wrapper {
  position: relative;
  border-radius: 5px;
  padding: 0px;
  height: auto;
  width: 100%;
  background: #ebdf00 50%;
  background: linear-gradient(120deg, #151515 20em, #ebdf00 20em);
  border-top: 10px solid #151515;
  box-shadow: 0px 5px 10px #303030;
}

.card-variant1__header {
  text-align: left;
  border-radius: 20px 20px 0px 0px;
  padding-left: 3em;
  color: white;
}
.card-variant1__header--title {
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 2px;
}
.header-divider {
  position: relative;
  width: 100%;
  margin: 0px;
  height: 10px;
  border: none;
  background: linear-gradient(120deg, #ebdf00 16.2em, #151515 16.2em);
  clip-path: polygon(1% 0%, 100% 0%, 100% 100%, 0% 100%);
  padding: 0px;
}
.card-variant1__header--subtitle {
  font-weight: lighter;
  font-size: 15px;
  color: #808080;
}
.card-variant1__body {
  position: relative;
  height: 100%;
  margin-block: 1em;
  margin-inline: 2em;
  font-size: 13px;
  color: white;
}

#body-text {
  text-shadow: 1px 1px 1px #151515;
  text-align: justify;
}

.diagonal-shape {
  top: 0;
  right: 0;
  background: white;
  float: right;
  width: 5em;
  height: 200%;
  margin: 0;
}

.card-variant1__footer {
  background: #151515;
  border-radius: 0;
  padding-block: 10px;
  text-align: right;
  border-radius: 0px 0px 5px 5px;
}

.card-variant1__footer--button {
  transition: all 0.3s ease-out;
  cursor: pointer;
  background: #ebdf00;
  color: #151515;
  border: none;
  font-size: 15px;
  min-width: 100px;
  max-height: 40px;
  border-block: 2px solid #ebdf00;
  text-align: center;
  border-radius: 1px;
  margin-right: 2em;
  padding: 5px;
  padding-inline: 20px;

  &:hover {
    background: none;
    border-block: 2px solid #ebdf00;
    color: #ebdf00;
  }
}
</style>
