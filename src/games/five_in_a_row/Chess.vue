<template>
  <div class="chess relative rounded-full border" :class="{
  'bg-gray-800': props.chessType === 'black',
  'bg-gray-100': props.chessType === 'white',
  'black-chess': props.chessType === 'black',
  'white-chess': props.chessType === 'white',
  }">
    <div class="light absolute bg-white rounded-full" :class="{
    'black-chess-light': props.chessType === 'black',
    'white-chess-light': props.chessType === 'white',
    }"></div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  chessType: 'black' | 'white'
}>()

</script>

<style scoped>
.chess {
  width: 45px;
  height: 45px;
  border-width: 0px;
}

.black-chess {
  box-shadow: inset 0px 0px 10px rgb(160, 160, 160), 0px 0px 5px rgb(95, 95, 95);
}

.white-chess {
  box-shadow: inset 0px 0px 10px rgb(164, 164, 164), 0px 0px 5px rgb(95, 95, 95);
}

.light {
  width: 4px;
  height: 8px;
  border-radius: 10px;
  right: 10px;
  top: 6px;
  transform: rotate(-45deg);
  box-shadow: 0px 0px 10px 0px white;
}

.black-chess-light{
  background-color: rgb(232, 232, 232);
}

.white-chess-light{
  background-color: rgb(255, 255, 255);
}
</style>