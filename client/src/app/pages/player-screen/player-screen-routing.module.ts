import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerScreenComponent } from './player-screen.component';

const routes: Routes = [{ path: '', component: PlayerScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerScreenRoutingModule { }
