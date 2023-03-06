import { GameMode, GameStatus } from '../models/game.model';

export class SetBoard {
  static readonly type = '[GAME] Set Board';

  constructor(public payload: Array<Array<number>>) {}
}

export class ResetBoard {
  static readonly type = '[GAME] Reset Board';
}

export class SetGameMode {
  static readonly type = '[GAME] Set Game Mode';

  constructor(public payload: GameMode) {}
}

export class SetDiscColor {
  static readonly type = '[GAME] Set Disc Color';

  constructor(public payload: { player: number; color: string }) {}
}

export class AddDisc {
  static readonly type = '[GAME] Add Disc';

  constructor(public payload: number) {}
}

export class NextTurn {
  static readonly type = '[GAME] Next Turn';
}

export class SetStaus {
  static readonly type = '[GAME] Set Status';

  constructor(public payload: GameStatus) {}
}
