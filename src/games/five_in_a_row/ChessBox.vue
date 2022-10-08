<template>
  <div class="chess-box flex flex-col justify-between items-center">
    <div class="chess-box-outer-border bg-yellow-900 rounded-full z-0 shadow-2xl flex justify-center items-center"
      :class="{'border-blue-400 border-2 shadow-turn': props.turn}">
      <div class="chess-box-inner-border bg-yellow-50 w-5/6 h-5/6 rounded-full z-10 shadow-inner"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Chess from "./Chess.vue";
import { useGame, ChessType } from "./game";

const game = useGame()

const props = defineProps<{
  chessType: ChessType, // 棋子类型
  turn: boolean
}>()

const chessCountInBox = props.chessType === "black" ? game.blackChessCountInBox : game.whiteChessCountInBox // 盒子中棋子数量
</script>

<style scoped>
.chess-box {
  height: 200px;
  width: 200px;
}

.chess-box-outer-border {
  width: 200px;
  height: 200px;
  box-shadow: -20px 20px 20px 0px gray;
}
</style>