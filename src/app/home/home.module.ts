import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeRoutingModule } from './home.routing';
import { PublicModule } from '../public/public.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    PublicModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
