import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostScreenComponent } from './host-screen.component';

const routes: Routes = [{ path: '', component: HostScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostScreenRoutingModule { }
