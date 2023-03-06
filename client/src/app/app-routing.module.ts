import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-quiz', loadChildren: () => import('./pages/create-quiz/create-quiz.module').then(m => m.CreateQuizModule) },
  { path: 'join-game', loadChildren: () => import('./pages/join-game/join-game.module').then(m => m.JoinGameModule) },
  { path: 'watting-game', loadChildren: () => import('./pages/watting-game/watting-game.module').then(m => m.WattingGameModule) },
   { path: 'player-screen', loadChildren: () => import('./pages/player-screen/player-screen.module').then(m => m.PlayerScreenModule) },
    { path: 'host-screen', loadChildren: () => import('./pages/host-screen/host-screen.module').then(m => m.HostScreenModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
