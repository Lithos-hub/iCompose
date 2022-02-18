<template>
  <div class="menu__list-wrapper">
    <ul class="menu__list">
      <router-link
        v-for="(item, i) in data"
        :key="i"
        class="menu__list-item"
        active-class="menu__list-active"
        :to="{ path: item.path }"
      >
        {{ item.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'tab-menu',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
@import "@/scss/variables.scss";
.menu__list-wrapper {
  justify-content: center;
  width: 100%;
  height: 100%;
  display: inline-block;
}

.menu__list {
  position: absolute;
  left: 50%;
  top: 12rem;
  transform: translate(-50%, -50%);
  min-width: auto;
  max-width: 100%;
  width: auto;
  border-radius: 5px;
  list-style: none;
  display: flex;
  justify-content: center;
  background: white;
  margin-inline: auto;
  align-items: middle;
  padding: 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.527), 0px 2px 10px #30303080;
  clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);

  .menu__list-item {
    text-decoration: none;
    transition: all 0.1s ease-in;
    color: $secondary;
    font-weight: bold;
    padding: 20px;
    min-width: 150px;
    margin: 0 auto;

    &:not(:last-child) {
      border-right: 2px solid $secondary;
    }

    &:first-child {
      transition: all 0.1s ease-in;
      border-radius: 5px 0px 0px 5px;
      text-align: right;
    }

    &:last-child {
      transition: all 0.1s ease-in;
      border-radius: 0px 5px 5px 0px;
      text-align: left;
    }

    &:hover {
      color: $primary;
      border-bottom: 3px solid $secondary;
      padding-bottom: 3px;
      background: $twilight;
    }
  }
}

.menu__list-active {
  background: $secondary;
  color: white !important;
}
</style>
