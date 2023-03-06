import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostScreenRoutingModule } from './host-screen-routing.module';
import { HostScreenComponent } from './host-screen.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HostScreenComponent
  ],
  imports: [
    CommonModule,
    HostScreenRoutingModule,
    SharedModule
  ]
})
export class HostScreenModule { }
