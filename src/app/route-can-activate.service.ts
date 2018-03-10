import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouteCanActivateService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('userName') !== null) {
      return true;
    }
    const url: string = state.url;
    sessionStorage.setItem('redirectUrl', url);
    this.router.navigate(['/login']);
    return false;
  }

}
