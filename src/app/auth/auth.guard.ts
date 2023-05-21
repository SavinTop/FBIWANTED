import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanLoad, RouterStateSnapshot, UrlTree, Router, CanMatch, Route, UrlSegment } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanMatch {
	constructor(
		private auth:AuthService,
		private router: Router
	)	{}

	canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		return this.auth.state$.pipe(
				first((el)=>{
					return el !== this.auth.AuthState.pending
				}),
				map((el)=>{
					const temp =  el === this.auth.AuthState.authorized
					if(temp) return true

					this.router.navigateByUrl('')
					return false
				}))

	}

	

}
