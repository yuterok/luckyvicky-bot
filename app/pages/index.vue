<template>
  <div class="index-container">
    <div class="text">
      <p class="hello-text">
        Добрый день, <br />🍀 {{ initDataUnsafe.user?.username }} 🍀
      </p>
      <p class="info-text">
        Приготовьтесь получить заряд вселенской удачи
        <br />и нажмите на кнопку ниже
      </p>
    </div>

    <NuxtLink
      to="/LuckyVicky"
      class="button bg-blue-500 text-white px-4 py-2 rounded"
    >
      Получить удачу
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { useWebApp } = await import("vue-tg");

const { initDataUnsafe } = useWebApp();
</script>

<style lang="scss" scoped>
.index-container {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .text {
    padding: 20px 0;
    color: var(--tg-theme-text-color);
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .hello-text {
      font-weight: 500;
      font-size: 20px;
    }
    .info-text {
      font-weight: 400;
      font-size: 14px;
    }
  }
}
.button {
  position: absolute;
  top: 50%;
  padding: 12px 24px 14px 24px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--tg-theme-button-text-color);
  background: var(--tg-theme-button-color);
  width: fit-content;
}
</style>
