<template>
  <div class="main-container flex flex-row justify-start items-center h-full">
    <div class="game-list h-full w-1/6 bg-indigo-50">
      <n-menu :options="gameList" mode="vertical" v-model:value="selectedGameKey">
      </n-menu>
    </div>
    <div class="game-container h-full w-5/6">
      <component :is="gameVueComponent"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NMenu, NButton } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { ref, computed, defineAsyncComponent, reactive, watch, markRaw, toRaw, shallowRef } from "vue";
import type { ComputedRef, Ref, VueElement } from "vue"
import { useGameManager } from "./lib/store"
// import { useRouter } from "vue-router"

// const router = useRouter()

// 游戏管理
const gameManager = useGameManager()

// 游戏列表
const gameList: ComputedRef<MenuOption[]> = computed(() => {
  return gameManager.games.map(gameItem => { return { label: gameItem.name, key: gameItem.name } })
})

// 当前选择的游戏
const selectedGameKey: Ref<string> = ref(gameManager.games[0].name);

// 当前选择游戏的VueComponent
let gameVueComponent = shallowRef(defineAsyncComponent({
  loader: () => import(/* @vite-ignore */gameManager.games[0].source),
}))

// 切换选择游戏后 动态加载游戏
watch(selectedGameKey, async (newGameKey, oldGameKey) => {
  const selectGame = gameManager.games.find(gameItem => gameItem.name === newGameKey)
  if (!selectGame) return

  gameVueComponent.value = defineAsyncComponent({
    loader: () => import(/* @vite-ignore */selectGame.source),
  })
})
</script>

<style scoped>

</style>
