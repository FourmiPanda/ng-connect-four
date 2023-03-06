import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { EndGameDialogComponent } from './end-game-dialog/end-game-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { DiscComponent } from './disc/disc.component';

/**
 * The game module
 */
@NgModule({
  declarations: [GameComponent, EndGameDialogComponent, DiscComponent],
  imports: [CommonModule, SharedModule, MatIconModule, MatButtonModule],
  exports: [GameComponent, EndGameDialogComponent],
})
export class GameModule {}
