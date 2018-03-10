import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaiduEchartsComponent } from './baidu-echarts.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'baiduEchartsHome',
    pathMatch: 'full'
}, {
    path: 'baiduEchartsHome',
    component: BaiduEchartsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BaiduEchartsRoutingModule { }