import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasingManagementComponent } from './purchasing-management.component';
import { PurchasingCenterComponent } from './purchasing-center/purchasing-center.component';
import { PurchasingSettingComponent } from './purchasing-setting/purchasing-setting.component';
import { NoFoundPageComponent } from '../public/no-found-page/no-found-page.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'purchaseMangeHome',
    pathMatch: 'full'
}, {
    path: 'purchaseMangeHome',
    component: PurchasingManagementComponent,
    children: [{
        path: '',
        redirectTo: 'purchaseSetting',
        pathMatch: 'full'
    }, {
        path: 'purchaseSetting',
        component: PurchasingSettingComponent
    }, {
        path: 'purchaseCenter',
        component: PurchasingCenterComponent
    }]
}, {
    path: '**',
    component: NoFoundPageComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PurchasingManagementRoutingModule { }