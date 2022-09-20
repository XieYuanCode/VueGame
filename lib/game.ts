import { GameContext } from "./gameContext";

export interface IGame {
  name: string

  version: string

  author: string

  source: string

  start: (context?: GameContext) => Promise<void>
  shutdown: (context?: GameContext) => void
}

export abstract class Game implements IGame {
  version: string = "1.0.0";
  author: string = "xy";
  start: (context?: GameContext) => Promise<void> = (context) => {
    return new Promise(() => { })
  };
  shutdown: (context?: GameContext) => Promise<void> = (context) => {
    return new Promise(() => { })
  };

  constructor(
    public name: string,
    public source: string
  ) { }
}

export class GameWithCharacters extends Game {
  constructor(
    public name: string,
    public source: string
  ) {
    super(name, source)
  }
}
export class GameWithoutCharacters extends Game {
  constructor(
    public name: string,
    public source: string
  ) {
    super(name, source)
  }
}