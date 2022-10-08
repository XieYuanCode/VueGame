<template>
  <div class="five-in-a-row w-full h-full flex justify-center items-center flex-col">
    <div class="game-container w-4/5 h-auto flex justify-around items-end">
      <chess-box class="white-chess-box mt-60" chess-type="black" :turn="game.nextStepChessType ==='black'"></chess-box>
      <div class="chessboard bg-gray-50 p-5 rounded-lg shadow-xl w-auto h-auto grid">
        <div class="checkerboard-item bg-red-50 border border-gray-400" v-for="item in 196"></div>
      </div>
      <chess-box class="black-chess-box mt-60" chess-type="white" :turn="game.nextStepChessType ==='white'"></chess-box>
    </div>
    <div class="command-panel mt-5 flex items-center justify-around">
      <n-button @click="startGame">开始</n-button>
      <Chess chess-type="black"></Chess>
      <Chess chess-type="white"></Chess>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from "naive-ui"
import ChessBox from "./ChessBox.vue";
import Chess from './Chess.vue'
import { useGame } from "./game";

const game = useGame()

const startGame = () => {
  game.start()
}

</script>

<style scoped>
.chessboard {
  grid-template-columns: repeat(14, 50px);
  grid-template-rows: repeat(14, 50px);
  box-shadow: -5px 5px 10px 0px gray;
}
</style>