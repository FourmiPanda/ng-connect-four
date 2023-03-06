import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  /**
   * Check if there is a horizontal, vertical, or diagonal line of four of one's own token
   *
   * @param {Array<Array<number>>} board The board
   * @param {number} currentPlayerPiece The token to look for
   * @returns {boolean} Whether there is a line of four or not
   */
  checkWin(board: Array<Array<number>>, currentPlayerPiece: number): boolean {
    const NB_OF_COLUMNS = board.length;
    const NB_OF_ROW = board.length > 0 ? board[0].length : 0;

    // Check Vertical win
    for (let i = 0; i < NB_OF_COLUMNS; i++) {
      for (let j = 0; j < NB_OF_ROW - 3; j++) {
        if (
          board[i][j] === currentPlayerPiece &&
          board[i][j + 1] === currentPlayerPiece &&
          board[i][j + 2] === currentPlayerPiece &&
          board[i][j + 3] === currentPlayerPiece
        ) {
          return true;
        }
      }
    }

    // Check Horizontal win
    for (let i = 0; i < NB_OF_COLUMNS - 3; i++) {
      for (let j = 0; j < NB_OF_ROW; j++) {
        if (
          board[i][j] === currentPlayerPiece &&
          board[i + 1][j] === currentPlayerPiece &&
          board[i + 2][j] === currentPlayerPiece &&
          board[i + 3][j] === currentPlayerPiece
        ) {
          return true;
        }
      }
    }

    // Check ASC Diagonal win

    for (let i = 0; i < NB_OF_COLUMNS - 3; i++) {
      for (let j = 0; j < NB_OF_ROW - 3; j++) {
        if (
          board[i][j] === currentPlayerPiece &&
          board[i + 1][j + 1] === currentPlayerPiece &&
          board[i + 2][j + 2] === currentPlayerPiece &&
          board[i + 3][j + 3] === currentPlayerPiece
        ) {
          return true;
        }
      }
    }

    // Check DESC Diagonal win

    for (let i = 0; i < NB_OF_COLUMNS - 3; i++) {
      for (let j = 3; j < NB_OF_ROW; j++) {
        if (
          board[i][j] === currentPlayerPiece &&
          board[i + 1][j - 1] === currentPlayerPiece &&
          board[i + 2][j - 2] === currentPlayerPiece &&
          board[i + 3][j - 3] === currentPlayerPiece
        ) {
          return true;
        }
      }
    }

    // NO WIN
    return false;
  }

  /**
   * Check if the board is full and therefore no move can be done
   *
   * @param {Array<Array<number>>} board The board
   * @param {Array<Array<number>>} board The current turn
   * @returns {boolean} Whether the board is full or not
   */
  checkMaxTurn(board: Array<Array<number>>, turn: number): boolean {
    const NB_OF_COLUMNS = board.length;
    const NB_OF_ROW = board.length > 0 ? board[0].length : 0;
    return turn + 1 >= NB_OF_COLUMNS * NB_OF_ROW;
  }
}
