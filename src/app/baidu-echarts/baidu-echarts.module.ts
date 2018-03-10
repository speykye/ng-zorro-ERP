import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
import { BaiduEchartsRoutingModule } from './baidu-echarts.routing';

import { BaiduEchartsComponent } from './baidu-echarts.component';

@NgModule({
  imports: [
    CommonModule,
    BaiduEchartsRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  declarations: [BaiduEchartsComponent]
})
export class BaiduEchartsModule { }
