<template>
  <div class="centered">
    <p>iCompose is a "custom components" portfolio made with Vue + HTML, CSS/SCSS and JavaScript</p>
    <p>
      Without using any CSS component library like Vuetify, Bootstrap or Quasar, <br />
      these components have been made from scratch.
    </p>
    <p>
      This is a good way to get out of my comfort zone, because it's much more challenging <br />
      to make components without any library and it's also a way to practice my logarithmic skills
      and pure CSS.
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import '../scss/app.scss';
@import '../scss/variables.scss';

p {
  margin-block: 5em;
  font-size: 20px;
  color: $secondary;
}
</style>
