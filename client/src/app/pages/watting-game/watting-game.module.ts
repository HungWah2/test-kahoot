import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WattingGameRoutingModule } from './watting-game-routing.module';
import { WattingGameComponent } from './watting-game.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WattingGameComponent
  ],
  imports: [
    CommonModule,
    WattingGameRoutingModule,
    SharedModule
  ]
})
export class WattingGameModule { }
