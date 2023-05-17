import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './models/user.service'
import { BehaviorSubject, Observable } from "rxjs";
import {AuthState} from './models/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData$ = new BehaviorSubject<User | null>(null);
state$ = new BehaviorSubject<AuthState>(AuthState.pending)

getUser(): Observable<User | null> {
	return this.userData$.asObservable()
}

constructor(
public afAuth: AngularFireAuth,
private router: Router
) { 
	this.afAuth.authState.subscribe((user) => {  
	if (user) {
        this.userData$.next({
		uid: user.uid,
		email: user.email,
		});
		this.state$.next(AuthState.authorized)
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', 'null');
        this.userData$.next(null);
		this.state$.next(AuthState.unauthorized)
      }
    });
	
	}

async SignIn(email: string, password: string) {
	this.state$.next(AuthState.pending)
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        window.alert(error.message);
		this.state$.next(AuthState.unauthorized)
      });
  }

async SignOut() {
	this.router.navigateByUrl('/')
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
	  this.state$.next(AuthState.unauthorized)
    });
  }

  get AuthState(){
	return AuthState
  }

}
