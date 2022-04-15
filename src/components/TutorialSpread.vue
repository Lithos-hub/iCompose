<template>
  <div class="tutorial__wrapper fadeIn">
    <div class="tutorial__first--area"></div>
    <div class="tutorial__first">
      <p>Here you can enable or disable some different selection and filtering options</p>
    </div>
    <div class="tutorial__second--area"></div>
    <div class="tutorial__second">
      <p>Download the data in a Excel format file clicking on this button</p>
    </div>
    <div class="tutorial__third--area"></div>
    <div class="tutorial__third">
      <p>Click on a header to select a column</p>
    </div>
    <div class="tutorial__fourth--area"></div>
    <div class="tutorial__fourth">
      <p>Click on a row index to select a row</p>
    </div>
    <img id="cursor__image" src="../assets/img/cursor.png" />
    <div class="tutorial__fifth--area"></div>
    <div class="tutorial__fifth">
      <p>Drag with the left mouse button to select an area.</p>
    </div>
    <div class="tutorial__sixth--area"></div>
    <div class="tutorial__sixth">
      <p>Click on a cell to edit it.</p>
    </div>
  </div>
</template>

<script>
export default {};
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
  overflow: hidden;
}

.tutorial__first {
  transition: all 0.5s ease-out;
  background: #151515;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  top: 190px;
  left: 10px;
  max-width: 180px;
  font-size: 11px;
  color: rgb(0, 174, 255);
  opacity: 0;
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
  animation: neonBlue 1s linear infinite alternate-reverse;

  &:hover {
    cursor: pointer;
    & + .tutorial__first {
      opacity: 1;
    }
  }
}

.tutorial__second {
  transition: all 0.5s ease-out;
  background: #151515;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  top: 390px;
  left: 10px;
  max-width: 180px;
  font-size: 11px;
  color: #15ff00;
  opacity: 0;
}

.tutorial__second--area {
  position: fixed;
  top: 335px;
  left: 84px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px #00ff15, 0px 0px 20px #ff0000;
  animation: neonGreen 1s linear infinite alternate-reverse;

  &:hover {
    cursor: pointer;
    & + .tutorial__second {
      opacity: 1;
    }
  }
}

.tutorial__third {
  transition: all 0.5s ease-out;
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
  color: #c300ff;
  opacity: 0;
}

.tutorial__third--area {
  position: fixed;
  top: 290px;
  left: 150px;
  width: 80vw;
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px #8400ff, 0px 0px 20px #ff0000;
  animation: neonPurple 1s linear infinite alternate-reverse;

  &:hover {
    cursor: pointer;
    & + .tutorial__third {
      opacity: 1;
    }
  }
}

.tutorial__fourth {
  transition: all 0.5s ease-out;
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
  opacity: 0;
}

.tutorial__fourth--area {
  position: fixed;
  bottom: 140px;
  left: 84px;
  width: 40px;
  height: 250px;
  border-radius: 5px;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px #00e1ff, 0px 0px 20px #5061ff;
  animation: neonCyan 1s linear infinite alternate-reverse;

  &:hover {
    cursor: pointer;
    & + .tutorial__fourth {
      opacity: 1;
    }
  }
}

.tutorial__fifth {
  transition: all 0.5s ease-out;
  background: #151515;
  padding: 5px;
  padding-inline: 25px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  bottom: 100px;
  left: 600px;
  max-width: 390px;
  font-size: 11px;
  color: #ffae00;
  opacity: 0;
}

.tutorial__fifth--area {
  position: fixed;
  float: left;
  top: 50vh;
  left: 98vh;
  transform: translate(-50%, -50%);
  animation: cursorArea 3s ease-in-out infinite;
  background: rgba(66, 0, 128, 0.247);

    &:hover {
    cursor: pointer;
    & + .tutorial__fifth {
      opacity: 1;
    }
  }
}

#cursor__image {
  position: fixed;
  top: 600px;
  left: 800px;
  width: 20px;
  height: auto;
  animation: cursorMotion 3s ease-in-out infinite;
  z-index: 999;
}

.tutorial__sixth--area {
  position: fixed;
  bottom: 140px;
  left: 360px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 5px white, 0px 0px 15px #ff0000, 0px 0px 20px #ffee50;
  animation: neonRed 1s linear infinite alternate-reverse;

  &:hover {
    cursor: pointer;
    & + .tutorial__sixth {
      opacity: 1;
    }
  }
}

.tutorial__sixth {
  transition: all 0.5s ease-out;
  background: #151515;
  padding: 5px;
  padding-inline: 25px;
  border-radius: 10px;
  border: 1px solid white;
  position: fixed;
  bottom: 50px;
  left: 300px;
  max-width: 390px;
  font-size: 11px;
  color: #ff4747;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes neonBlue {
  0% {
    border: 2px solid cyan;
    box-shadow: 0px 0px 2px white, 0px 0px 10px cyan, 0px 0px 20px magenta;
  }
  25% {
    border: 2px solid cyan;
    box-shadow: 0px 0px 1px white, 0px 0px 12px cyan, 0px 0px 15px magenta;
  }
  50% {
    border: 2px solid white;
    box-shadow: 0px 0px 3px white, 0px 0px 8px cyan, 0px 0px 22px magenta;
  }
  75% {
    border: 2px solid white;
    box-shadow: 0px 0px 2px white, 0px 0px 15px cyan, 0px 0px 18px magenta;
  }
  100% {
    border: 2px solid cyan;
    box-shadow: 0px 0px 1px white, 0px 0px 10px cyan, 0px 0px 19px magenta;
  }
}

@keyframes neonGreen {
  0% {
    border: 2px solid #afffb6;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(0, 255, 0), 0px 0px 20px #0099ff;
  }
  25% {
    border: 2px solid #afffb6;
    box-shadow: 0px 0px 1px white, 0px 0px 12px rgb(0, 255, 42), 0px 0px 15px #0099ff;
  }
  50% {
    border: 2px solid white;
    box-shadow: 0px 0px 3px white, 0px 0px 8px rgb(21, 255, 0), 0px 0px 22px #0099ff;
  }
  75% {
    border: 2px solid white;
    box-shadow: 0px 0px 2px white, 0px 0px 15px rgb(0, 255, 42), 0px 0px 18px #0099ff;
  }
  100% {
    border: 2px solid #afffb6;
    box-shadow: 0px 0px 1px white, 0px 0px 10px rgb(43, 255, 0), 0px 0px 19px #0099ff;
  }
}

@keyframes neonPurple {
  0% {
    border: 2px solid #ffafff;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(255, 0, 234), 0px 0px 20px #ff1e00;
  }
  25% {
    border: 2px solid #ffafff;
    box-shadow: 0px 0px 1px white, 0px 0px 12px rgb(174, 0, 255), 0px 0px 15px #ffbb00;
  }
  50% {
    border: 2px solid white;
    box-shadow: 0px 0px 3px white, 0px 0px 8px rgb(225, 0, 255), 0px 0px 22px #ff1e00;
  }
  75% {
    border: 2px solid white;
    box-shadow: 0px 0px 2px white, 0px 0px 15px rgb(174, 0, 255), 0px 0px 18px #ff8800;
  }
  100% {
    border: 2px solid #f8afff;
    box-shadow: 0px 0px 1px white, 0px 0px 10px rgb(255, 0, 242), 0px 0px 19px #ff0000;
  }
}

@keyframes neonCyan {
  0% {
    border: 2px solid #afdfff;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(0, 255, 242), 0px 0px 20px #0004ff;
  }
  25% {
    border: 2px solid #affaff;
    box-shadow: 0px 0px 1px white, 0px 0px 12px rgb(0, 204, 255), 0px 0px 15px #0026ff;
  }
  50% {
    border: 2px solid white;
    box-shadow: 0px 0px 3px white, 0px 0px 8px rgb(0, 183, 255), 0px 0px 22px #0044ff;
  }
  75% {
    border: 2px solid white;
    box-shadow: 0px 0px 2px white, 0px 0px 15px rgb(0, 255, 242), 0px 0px 18px #1900ff;
  }
  100% {
    border: 2px solid #affff2;
    box-shadow: 0px 0px 1px white, 0px 0px 10px rgb(0, 255, 255), 0px 0px 19px #00a2ff;
  }
}

@keyframes neonRed {
  0% {
    border: 2px solid #ffe3af;
    box-shadow: 0px 0px 2px white, 0px 0px 10px rgb(255, 0, 0), 0px 0px 20px #ffd900;
  }
  25% {
    border: 2px solid #ffafaf;
    box-shadow: 0px 0px 1px white, 0px 0px 12px rgb(255, 145, 0), 0px 0px 15px #88ff00;
  }
  50% {
    border: 2px solid white;
    box-shadow: 0px 0px 3px white, 0px 0px 8px rgb(255, 0, 0), 0px 0px 22px #ff5e00;
  }
  75% {
    border: 2px solid white;
    box-shadow: 0px 0px 2px white, 0px 0px 15px rgb(255, 136, 0), 0px 0px 18px #ffd000;
  }
  100% {
    border: 2px solid #ffbfaf;
    box-shadow: 0px 0px 1px white, 0px 0px 10px rgb(255, 30, 0), 0px 0px 19px #ff6600;
  }
}

@keyframes cursorMotion {
  from {
    top: 600px;
    left: 500px;
  }
  to {
    top: 800px;
    left: 950px;
  }
}

@keyframes cursorArea {
  from {
    top: 600px;
    left: 500px;
    width: 0px;
    height: 0px;
    border: 2px dotted purple;
  }
  to {
    top: 700px;
    left: 720px;
    width: 450px;
    height: 180px;
    border: 2px dotted purple;
  }
}
</style>
