import { defineStore, _GettersTree } from 'pinia'
import { IGame } from "./game"

interface IGameManagerStatus {
  games: IGame[]
}

interface IGameManagerGetters extends _GettersTree<IGameManagerStatus> {

}

interface IGameManagerActions {
  registerGame(game: IGame): void
}

export const useGameManager = defineStore<"game", IGameManagerStatus, IGameManagerGetters, IGameManagerActions>("game", {
  state: () => ({
    games: []
  }),
  actions: {
    registerGame(game: IGame) {
      this.games.push(game);
    }
  }
})