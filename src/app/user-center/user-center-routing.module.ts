import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCenterComponent } from './user-center.component';
import { NoFoundPageComponent } from '../public/no-found-page/no-found-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'UserCenterHome',
  pathMatch: 'full'
}, {
  path: 'UserCenterHome',
  component: UserCenterComponent
}, {
  path: '**',
  component: NoFoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCenterRoutingModule { }
