import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundPageComponent } from '../public/no-found-page/no-found-page.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'purchasingManagement',
    pathMatch: 'full'
}, {
    path: 'purchasingManagement',
    loadChildren: '../purchasing-management/purchasing-management.module#PurchasingManagementModule'
}, {
    path: 'publicData',
    loadChildren: '../public-data/public-data.module#PublicDataModule'
}, {
    path: 'salesManagement',
    loadChildren: '../sales-management/sales-management.module#SalesManagementModule'
}, {
    path: 'baiduEcharts',
    loadChildren: '../baidu-echarts/baidu-echarts.module#BaiduEchartsModule'
}, {
    path: 'userCenter',
    loadChildren: '../user-center/user-center.module#UserCenterModule'
}, {
    path: '**',
    component: NoFoundPageComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }

