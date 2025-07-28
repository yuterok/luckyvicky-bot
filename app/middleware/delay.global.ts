export default defineNuxtRouteMiddleware(async (to, from) => {
  // Если это первый заход в приложение (нет предыдущего пути) — выходим
  if (to.fullPath !== '/LuckyVicky') return

  // Добавляем искусственную задержку только при переходе между страницами
  await new Promise((resolve) => setTimeout(resolve, 5000))
})
