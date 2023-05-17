import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanLoad, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
	private auth:AuthService,
	private router: Router
  )	{}
	
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
	console.log("CanActivate", route.title)
	return !!this.auth.userData$.value
  }
  
  canLoad() 
  {
	console.log("CanLoad")
	return !!this.auth.userData$.value
  }


}
