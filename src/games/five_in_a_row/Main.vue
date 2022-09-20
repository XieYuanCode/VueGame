<template>
  <div class="five-in-a-row w-full h-full flex justify-center items-center flex-col">
    <div class="game-container w-full h-auto flex justify-around items-center">922
      <div class="white-chest-box w-10 h-10 bg-black mt-60"></div>
      <div class="checkerboard bg-gray-50 p-5 rounded-lg shadow-xl w-auto h-auto grid">
        <div class="checkerboard-item bg-red-50 border border-gray-400" v-for="item in 196"></div>
      </div>
      <div class="black-chest-box w-10 h-10 bg-black mt-60"></div>
    </div>
    <div class="command-panel mt-5">
      <n-button>开始</n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from "naive-ui"

</script>

<style scoped>
.checkerboard {
  grid-template-columns: repeat(14, 40px);
  grid-template-rows: repeat(14, 40px);
}
</style>