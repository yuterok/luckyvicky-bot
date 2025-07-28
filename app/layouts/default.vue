<template>
  <main>
    <ClientOnly>
      <slot />
    </ClientOnly>
  </main>
</template>

<script setup>
useHead({
  script: [{ src: "https://telegram.org/js/telegram-web-app.js", defer: true }],
});
</script>

<style>
main {
  height: 98dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
