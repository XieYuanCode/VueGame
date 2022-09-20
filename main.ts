import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import { useGameManager } from "./lib/store"
import { GameWithCharacters, GameWithOutCharacters } from "./lib/game"
// import { createRouter, createWebHashHistory } from "vue-router"

import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia())

const gameManager = useGameManager()
gameManager.registerGame(new GameWithCharacters("贪吃蛇", "./src/games/greedy_snake/Main.vue"))
gameManager.registerGame(new GameWithOutCharacters("五子棋", "./src/games/five_in_a_row/Main.vue"))

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: gameManager.games.map(gameItem => { return { path: `/game/${gameItem.name}`, component: () => import(/* @vite-ignore */gameItem.source) } }).concat({ path: "/", component: () => import(/* @vite-ignore */gameManager.games[0].source) })
// })

// app.use(router)
app.mount("#app")
