import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesManagementRoutingModule } from './sales-management.routing';
import { SalesManagementComponent } from './sales-management.component';

@NgModule({
  imports: [
    CommonModule,
    SalesManagementRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [SalesManagementComponent]
})
export class SalesManagementModule { }
