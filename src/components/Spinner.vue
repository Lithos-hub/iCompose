<template>
  <div class="spinner"></div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
@import "@/scss/variables.scss";

.spinner {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: none;
    border: 3px solid $primary;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    animation: rotate 0.8s infinite linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>
