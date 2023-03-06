import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WattingGameComponent } from './watting-game.component';

const routes: Routes = [{ path: '', component: WattingGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WattingGameRoutingModule { }
