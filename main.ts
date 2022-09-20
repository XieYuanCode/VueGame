import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import { useGameManager } from "./lib/store"
import { GameWithCharacters, GameWithoutCharacters } from "./lib/game"
// import { createRouter, createWebHashHistory } from "vue-router"

import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia())

const gameManager = useGameManager()
gameManager.registerGame(new GameWithoutCharacters("五子棋", "./src/games/five_in_a_row/Main.vue"))
gameManager.registerGame(new GameWithCharacters("贪吃蛇", "./src/games/greedy_snake/Main.vue"))

app.mount("#app")
