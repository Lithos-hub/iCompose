<template>
  <div class="tutorial__wrapper fadeIn">
      <div class="tutorial__first">
        <p>Here you can enable or disable some different selection and filtering options</p>
      </div>
      <div class="tutorial__first--area"></div>
      <div class="tutorial__second">
        <p>Download the table data in Excel format clicking on this button</p>
      </div>
      <div class="tutorial__second--area"></div>
      <div class="tutorial__third">
        <p>Click on a header to select a column</p>
      </div>
      <div class="tutorial__third--area"></div>
      <div class="tutorial__fourth">
        <p>Click on a row index to select a row</p>
      </div>
      <div class="tutorial__fourth--area"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.fadeIn {
  animation: fadeIn 1s ease-out;
}

.tutorial__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #240f4b6e;
    z-index: 99999;
}

.tutorial__first {
  background: #151515;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  top: 190px;
  left: 10px;
  max-width: 180px;
  font-size: 11px;
  color: rgb(58, 139, 231);
}

.tutorial__first--area {
  position: fixed;
  top: 290px;
  left: 84px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 5px white, 0px 0px 15px cyan, 0px 0px 20px magenta;
}

.tutorial__second {
  background: #151515;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  top: 390px;
  left: 10px;
  max-width: 180px;
  font-size: 11px;
  color: rgb(73, 179, 63);
}

.tutorial__second--area {
  position: fixed;
  top: 335px;
  left: 84px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px rgb(0, 255, 21), 0px 0px 20px rgb(255, 0, 0);
}

.tutorial__third {
  background: #151515;
  padding: 5px;
  padding-inline: 25px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  top: 220px;
  left: 800px;
  max-width: 390px;
  font-size: 11px;
  color: rgb(195, 0, 255);
}

.tutorial__third--area {
  position: fixed;
  top: 290px;
  left: 150px;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px rgb(132, 0, 255), 0px 0px 20px rgb(255, 0, 0);
}

.tutorial__fourth {
  background: #151515;
  padding: 5px;
  padding-inline: 25px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  bottom: 80px;
  left: 10px;
  max-width: 390px;
  font-size: 11px;
  color: cyan;
}

.tutorial__fourth--area {
  position: fixed;
  bottom: 140px;
  left: 84px;
  width: 40px;
  height: 250px;
  border-radius: 5px;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px rgb(0, 225, 255), 0px 0px 20px rgb(80, 97, 255);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
