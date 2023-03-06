import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerScreenRoutingModule } from './player-screen-routing.module';
import { PlayerScreenComponent } from './player-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlayerScreenComponent
  ],
  imports: [
    CommonModule,
    PlayerScreenRoutingModule,
    SharedModule
  ]
})
export class PlayerScreenModule { }
