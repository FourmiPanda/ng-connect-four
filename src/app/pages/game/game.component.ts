import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import {
  AddDisc,
  NextTurn,
  SetStaus,
} from 'src/app/shared/actions/game.actions';

import { EndGameDialogComponent } from './end-game-dialog/end-game-dialog.component';
import { GameService } from 'src/app/services/game.service';
import { GameMode, GameStatus } from 'src/app/shared/models/game.model';
import { SettingsDialogComponent } from 'src/app/shared/dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  GameStatus = GameStatus;

  board: Array<Array<number>> = [];

  board$: Observable<Array<Array<number>>>;

  turn = 0;

  turn$: Observable<number>;

  gameMode$: Observable<GameMode>;

  gameMode: GameMode = GameMode.VERSUS_AI;

  discsColor$: Observable<Array<string>>;

  discsColor: string[] = [];

  gameStatus$: Observable<GameStatus>;

  gameStatus: GameStatus = GameStatus.IN_PROGRESS;

  constructor(
    private gameService: GameService,
    private store: Store,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.board$ = this.store.select((state) => state.game.board);
    this.board$.subscribe((board) => {
      this.board = board;
    });
    this.gameStatus$ = this.store.select((state) => state.game.status);
    this.gameStatus$.subscribe((status) => {
      this.gameStatus = status;
    });
    this.turn$ = this.store.select((state) => state.game.turn);
    this.turn$.subscribe((turn) => {
      this.turn = turn;
    });
    this.gameMode$ = this.store.select((state) => state.game.gameMode);
    this.gameMode$.subscribe((gameMode) => {
      this.gameMode = gameMode;
    });
    this.discsColor$ = this.store.select((state) => state.game.discsColor);
    this.discsColor$.subscribe((discsColor) => {
      this.discsColor = discsColor;
    });
  }

  play(colIndex: number) {
    // Add disc
    try {
      this.store.dispatch(new AddDisc(colIndex)).subscribe(() => {
        // Check win
        const isWin = this.gameService.checkWin(
          this.board,
          this.turn % 2 === 0 ? 1 : 2
        );

        if (isWin) {
          return this.endGame();
        }

        // Check max turn

        const isMaxTurn = this.gameService.checkMaxTurn(this.board, this.turn);
        if (isMaxTurn) {
          this.endGame(true);
        }

        // Increase turn
        this.store.dispatch(new NextTurn()).subscribe(() => {
          if (this.turn % 2 === 1 && this.gameMode === GameMode.VERSUS_AI) {
            const topRowIndex = this.board[0].length;
            const possibleMoves = this.board
              .map((col, i) => {
                return col[topRowIndex] === 0 ? -1 : i;
              })
              .filter((e) => e >= 0);
            this.play(
              possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
            );
          }
        });
      });
    } catch (err) {
      this._snackBar.open('Illegal move', 'OK');
      return;
    }
  }

  endGame(isDraw?: boolean) {
    this.store.dispatch(new SetStaus(GameStatus.FINISHED));
    this.dialog.open(EndGameDialogComponent, {
      data: {
        isDraw: isDraw,
        color: this.discsColor[this.turn % 2],
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: 'fit-content',
      width: 'fit-content',
    });
  }

  openSettingsDialog() {
    this.dialog.open(SettingsDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: 'fit-content',
      width: 'fit-content',
    });
  }
}
