import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesManagementComponent } from './sales-management.component';
import { NoFoundPageComponent } from '../public/no-found-page/no-found-page.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'salesManagementHome',
    pathMatch: 'full'
}, {
    path: 'salesManagementHome',
    component: SalesManagementComponent
}, {
    path: '**',
    component: NoFoundPageComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SalesManagementRoutingModule { }