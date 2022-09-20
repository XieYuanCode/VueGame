<template>
  <div>五子棋</div>
</template>

<script lang="ts" setup>import { useGameManager } from '../../../lib/store';

const gameManager = useGameManager()
const game = gameManager.games.find(gameItem => gameItem.name === "五子棋")

await game?.start()
</script>