import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicDataRoutingModule } from './public-data.routing';
import { PublicDataComponent } from './public-data.component';
import { OrganizationComponent } from './organization/organization.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { FormComponent } from './organization/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    PublicDataRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [PublicDataComponent, OrganizationComponent, WareHouseComponent, FormComponent]
})
export class PublicDataModule { }
