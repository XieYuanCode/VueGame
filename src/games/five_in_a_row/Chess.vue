<template>
  <div class="chess relative rounded-full" :class="{
  'bg-gray-800': props.chessType === 'black',
  'bg-gray-50': props.chessType === 'white'
  }">
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  chessType: 'black' | 'white'
}>()

</script>

<style scoped>
.chess {
  width: 30px;
  height: 30px;
}
</style>