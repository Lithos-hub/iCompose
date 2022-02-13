<template>
  <div>
    <div class="centered">
      <router-link :to="'/home'">
        <button class="button__main">Enter</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.button__main {
  cursor: pointer;
  padding-block: 10px;
  border-radius: 5px;
  height: auto;
  text-align: center;
  width: 150px;
  border: none;
  box-shadow: 0px 2px 5px black, 0px 5px 10px #202020;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(120deg, #151515, #303030);
  color: white;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    border-radius: 50px;
    background: linear-gradient(50deg, $primary, $secondary);
    transform: scale(1.1);
  }
}
</style>
