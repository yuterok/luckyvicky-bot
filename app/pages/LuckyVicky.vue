<template>
  <div class="lucky-background">
    <div style="margin-top: 20px"></div>
    <div class="main-block">
      <h3>Поздравляем!</h3>
      <p>Удача теперь всегда на вашей стороне!</p>
      <img class="zoom-in" src="../assets/img/animation.gif.gif" alt="" />
    </div>

    <div class="lucky-text">
      <p>Кнопки "назад" нет, потому что обратного пути нет</p>
      <p>лаки вики джана.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LuckyVicky",
};
</script>

<style lang="scss" scoped>
.lucky-background {
  background: url("../assets/img/clover-leaf-21.gif");
  height: 100dvh;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.main-block {
  width: 90%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 20px rgba(0, 0, 0, 0.7);
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
}
.zoom-in {
  margin-top: 20px;
  width: 100%;
  animation: zoomIn 1s ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes textAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.lucky-text {
  background: black;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  padding: 5px 10px;
  margin-bottom: 20px;

  opacity: 0;
  animation: textAnimation 1s forwards;
  animation-delay: 1.5s;

  p {
    text-align: center;
  }
}
</style>
