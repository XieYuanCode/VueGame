import { defineStore, _GettersTree } from "pinia"
// abstract class ChessGamePlayer { }

// class WhiteChessGamePlayer extends ChessGamePlayer { }
// class BlackChessGamePlayer extends ChessGamePlayer { }
export type ChessType = 'black' | 'white';

class ChessPosition {
  constructor(
    public readonly x: number,
    public readonly y: number
  ) { }
}

class ChessBoard {
  public whiteChessPositions: Set<ChessPosition> = new Set()
  public blackChessPositions: Set<ChessPosition> = new Set()

  public reset() {
    this.whiteChessPositions.clear()
    this.blackChessPositions.clear()
  }

  public addChess(chessType: ChessType, position: ChessPosition) {
    if (chessType === 'black') {
      this.blackChessPositions.add(position)
    } else {
      this.whiteChessPositions.add(position)
    }
  }
}

interface IGameStatus {
  chessBoard: ChessBoard
  whiteChessCountInBox: number
  blackChessCountInBox: number
  nextStepChessType?: ChessType
}

interface IGameManagerGetters extends _GettersTree<IGameStatus> {
  winner: (state: IGameStatus) => ChessType | undefined
}

interface IGameActions {
  start(): void
  reset(): void
  nextStep(chessType: ChessType, position: ChessPosition): void
  isFinished(): boolean
}

export const useGame = defineStore<"game", IGameStatus, IGameManagerGetters, IGameActions>("game", {
  state: () => ({
    chessBoard: new ChessBoard(),
    whiteChessCountInBox: 112,
    blackChessCountInBox: 113,
    nextStepChessType: undefined
  }),
  getters: {
    winner: (state) => {
      return undefined
    }
  },
  actions: {
    start() {
      this.nextStepChessType = "black"
    },
    reset() {
      this.chessBoard.reset()

      this.whiteChessCountInBox = 112;
      this.blackChessCountInBox = 113;
    },
    nextStep(chessType: ChessType, position: ChessPosition) {
      if (chessType === 'black') {
        this.blackChessCountInBox--
      } else {
        this.whiteChessCountInBox--
      }
      this.chessBoard.addChess(chessType, position)
    },
    isFinished() {
      return false
    }
  }
})
