import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NoFoundPageComponent } from './no-found-page/no-found-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [NoFoundPageComponent],
  exports: []
})
export class PublicModule { }
