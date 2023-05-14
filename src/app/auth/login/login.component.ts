import { Component, 
	ChangeDetectionStrategy, 
	ChangeDetectorRef,
	OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import {MatDialogRef} from '@angular/material/dialog';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent{

constructor(
public auth: AuthService,
public dialogRef: MatDialogRef<LoginComponent>
){}

loginForm = new FormGroup({
email: new FormControl('', [
Validators.required,
Validators.email
]),
password: new FormControl('', [
Validators.required,
Validators.minLength(6)
]),
})

get email() { return this.loginForm.get('email') }

get password() { return this.loginForm.get('password')}

onSubmit() {
console.warn(this.loginForm.value);
this.auth.SignIn(this.loginForm.value.email!, this.loginForm.value.password!)
this.dialogRef.close();
}


}
