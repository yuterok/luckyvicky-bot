<template>
  <div v-if="isActive" class="loader">
    <p>Насыщаем вас удачей...</p>
    <div class="loader-container">
      <div class="loader-bar" :style="{ width: `${width}%` }" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading } = useLoadingIndicator();
const width = ref(0);
const isActive = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

watch(isLoading, (val) => {
  if (val) {
    isActive.value = true;
    width.value = 0;
    timer = setInterval(() => {
      if (width.value < 90) {
        width.value += Math.random() * 4 + 1;
      }
    }, 100);
  } else {
    clearInterval(timer!);
    width.value = 100;
    setTimeout(() => {
      isActive.value = false;
      width.value = 0;
    }, 400);
  }
});
</script>

<style lang="scss" scoped>
.loader {
  background: var(--tg-theme-bg-color);
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  p {
    color: var(--tg-theme-text-color);
  }
}
.loader-container {
  width: 80vw;
  height: 35px;
  background: var(--tg-theme-bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.loader-bar {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
  background: linear-gradient(90deg, #3dcd36, #95f590, #3dcd36);
  background-size: 200% 100%;
  animation: gradientMove 1.2s infinite linear;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
}
</style>
