import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicDataComponent } from './public-data.component';
import { OrganizationComponent } from './organization/organization.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { FormComponent } from './organization/form/form.component';
import { NoFoundPageComponent } from '../public/no-found-page/no-found-page.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'publicDataHome',
    pathMatch: 'full'
}, {
    path: 'publicDataHome',
    component: PublicDataComponent,
    children: [{
        path: '',
        redirectTo: 'organization',
        pathMatch: 'full'
    }, {
        path: 'organization',
        component: OrganizationComponent
    }, {
        path: 'organizationAdd',
        component: FormComponent
    }, {
        path: 'warehouse',
        component: WareHouseComponent
    }]
}, {
    path: '**',
    component: NoFoundPageComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicDataRoutingModule { }