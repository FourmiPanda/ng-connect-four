import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  SetBoard,
  ResetBoard,
  AddDisc,
  SetGameMode,
  NextTurn,
  SetDiscColor,
  SetStaus,
} from '../actions/game.actions';
import { GameMode, GameStatus } from '../models/game.model';

export interface GameStateModel {
  board: Array<Array<number>>;
  turn: number;
  gameMode: GameMode;
  discsColor: Array<string>;
  status: GameStatus;
}

@State<GameStateModel>({
  name: 'game',
  defaults: {
    board: Array.from(Array(7), () => Array.from(Array(6), () => 0)),
    turn: 0,
    gameMode: GameMode.VERSUS_HUMAN,
    discsColor: ['#ffef0f', '#d81f0e'],
    status: GameStatus.IN_PROGRESS,
  },
})
@Injectable()
export class GameState {
  @Selector()
  static getBoard(state: GameStateModel) {
    return state.board;
  }

  @Selector()
  static getDiscsColor(state: GameStateModel) {
    return state.discsColor;
  }

  @Selector()
  static getGameMode(state: GameStateModel) {
    return state.gameMode;
  }

  @Action(SetBoard)
  setBoard(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetBoard
  ) {
    patchState({
      board: payload,
    });
  }

  @Action(SetDiscColor)
  setDiscColor(
    { getState, patchState }: StateContext<GameStateModel>,
    { payload }: SetDiscColor
  ) {
    const newDiscColor = getState().discsColor;
    newDiscColor[payload.player] = payload.color;
    patchState({
      discsColor: newDiscColor,
    });
  }

  @Action(ResetBoard)
  resetBoard({ patchState }: StateContext<GameStateModel>) {
    patchState({
      board: Array.from(Array(7), () => Array.from(Array(6), () => 0)),
      status: GameStatus.IN_PROGRESS,
    });
  }

  @Action(SetGameMode)
  setGameMode(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetGameMode
  ) {
    patchState({
      gameMode: payload,
    });
  }

  @Action(SetStaus)
  setStatus(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetStaus
  ) {
    patchState({
      status: payload,
    });
  }

  @Action(AddDisc)
  addDisc(
    { getState, patchState }: StateContext<GameStateModel>,
    { payload }: AddDisc
  ) {
    const state = getState();

    const rowIndex = state.board[payload].findIndex((e) => e === 0);

    if (rowIndex === -1) {
      throw new Error('Illegal Move');
    }

    const currentPlayerPiece = state.turn % 2 === 0 ? 1 : 2;

    state.board[payload][rowIndex] = currentPlayerPiece;

    patchState({
      board: state.board,
      turn: state.turn,
    });
  }

  @Action(NextTurn)
  nextTurn({ getState, patchState }: StateContext<GameStateModel>) {
    const state = getState();
    patchState({
      turn: state.turn + 1,
    });
  }
}
