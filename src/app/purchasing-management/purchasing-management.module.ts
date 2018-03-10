import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PurchasingManagementRoutingModule } from './purchasing-manegment.routing';

import { PurchasingManagementComponent } from './purchasing-management.component';
import { PurchasingCenterComponent } from './purchasing-center/purchasing-center.component';
import { PurchasingSettingComponent } from './purchasing-setting/purchasing-setting.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PurchasingManagementRoutingModule
  ],
  declarations: [PurchasingManagementComponent, PurchasingCenterComponent, PurchasingSettingComponent]
})
export class PurchasingManagementModule { }
