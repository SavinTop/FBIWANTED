import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './models/user.service'
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData$ = new BehaviorSubject<User | null>(null);

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
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', 'null');
        this.userData$.next(null);
      }
    });
	}

SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        window.alert(error.message);
      });
  }

SignOut() {
	this.router.navigateByUrl('/')
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
