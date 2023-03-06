import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';

/**
 * App Routing module
 *
 * Exposing just two routes, one for Home page, the other one for Game page
 */
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {
        path: 'game',
        component: GameComponent,
        loadChildren: () =>
          import('./pages/game/game.module').then((m) => m.GameModule),
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
