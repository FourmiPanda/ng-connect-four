import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { ResetBoard, SetGameMode } from 'src/app/shared/actions/game.actions';
import { GameMode } from 'src/app/shared/models/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private store: Store
  ) {}

  startGame(versusAI: boolean) {
    this.store
      .dispatch([
        new ResetBoard(),
        new SetGameMode(versusAI ? GameMode.VERSUS_AI : GameMode.VERSUS_HUMAN),
      ])
      .subscribe(() => {
        this.router.navigate(['/game']);
      });
  }
}
