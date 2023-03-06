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
  /**
   * Get the board
   *
   * @returns {Array<Array<number>>} The board
   */
  @Selector()
  static getBoard(state: GameStateModel) {
    return state.board;
  }

  /**
   * Get an array of string representing player disc color in hex format
   *
   * @returns {Array<string>} The array of discs color
   */
  @Selector()
  static getDiscsColor(state: GameStateModel) {
    return state.discsColor;
  }

  /**
   * Get the current game mode
   *
   * @returns {GameMode} The current game mode
   */
  @Selector()
  static getGameMode(state: GameStateModel) {
    return state.gameMode;
  }

  /**
   * Set the board with the entered param
   */
  @Action(SetBoard)
  setBoard(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetBoard
  ) {
    patchState({
      board: payload,
    });
  }

  /**
   * Set the disc color with the entered param
   */
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

  /**
   * Reset the board by filling it with "0"
   */
  @Action(ResetBoard)
  resetBoard({ patchState }: StateContext<GameStateModel>) {
    patchState({
      board: Array.from(Array(7), () => Array.from(Array(6), () => 0)),
      status: GameStatus.IN_PROGRESS,
    });
  }

  /**
   * Set the game mode (versus player or versus AI)
   */
  @Action(SetGameMode)
  setGameMode(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetGameMode
  ) {
    patchState({
      gameMode: payload,
    });
  }

  /**
   * Set the status of the game (in progress or finished)
   */
  @Action(SetStaus)
  setStatus(
    { patchState }: StateContext<GameStateModel>,
    { payload }: SetStaus
  ) {
    patchState({
      status: payload,
    });
  }

  /**
   * Add a disc in the entered column parameter
   *
   * @throws {Error} Will throw an error if the disc cannot be added because the column is full.
   */
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

  /**
   * Increase the turn
   */
  @Action(NextTurn)
  nextTurn({ getState, patchState }: StateContext<GameStateModel>) {
    const state = getState();
    patchState({
      turn: state.turn + 1,
    });
  }
}
