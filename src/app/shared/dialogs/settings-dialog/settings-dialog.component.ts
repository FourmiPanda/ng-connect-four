import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetDarkMode } from '../../actions/app.actions';
import { SetDiscColor } from '../../actions/game.actions';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent {
  darkMode$: Observable<boolean>;
  darkMode = false;

  discsColor$: Observable<Array<string>>;
  discsColor: Array<string> = [];

  constructor(private store: Store) {
    this.darkMode$ = this.store.select((state) => state.app.darkMode);
    this.darkMode$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
    this.discsColor$ = this.store.select((state) => state.game.discsColor);
    this.discsColor$.subscribe((discsColor) => {
      this.discsColor = discsColor;
    });
  }

  /**
   * Switch between dark and light mode
   */
  changeTheme() {
    this.store.dispatch(new SetDarkMode(!this.darkMode));
  }

  /**
   * Set discs color for entered player number
   *
   * @param {number} player Number corresponding to player (1 or 2)
   * @param {any} e The event emitted by <input type="color" />
   */
  setDiscColor(player: number, e: any) {
    this.store.dispatch(new SetDiscColor({ player, color: e.target.value }));
  }
}
