import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterRoutingModule } from './user-center-routing.module';
import { UserCenterComponent } from './user-center.component';

@NgModule({
  imports: [
    CommonModule,
    UserCenterRoutingModule
  ],
  declarations: [UserCenterComponent]
})
export class UserCenterModule { }
