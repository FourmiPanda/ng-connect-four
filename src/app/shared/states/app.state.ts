import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { SetDarkMode } from '../actions/app.actions';

export interface AppStateModel {
  darkMode: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    darkMode: false,
  },
})
@Injectable()
export class AppState {
  @Selector()
  static isDarkModeEnable(state: AppStateModel) {
    return state.darkMode;
  }

  @Action(SetDarkMode)
  setDarkMode(
    { patchState }: StateContext<AppStateModel>,
    { payload }: SetDarkMode
  ) {
    console.log('setDarkMode');
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(payload ? 'light-mode' : 'dark-mode');
    body.classList.add(payload ? 'dark-mode' : 'light-mode');
    patchState({
      darkMode: payload,
    });
  }
}
