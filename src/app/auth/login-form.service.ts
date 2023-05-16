import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  constructor(private dialog: MatDialog) { }

  open(){
	this.dialog.open(LoginComponent)
  }

  closeAll(){
	this.dialog.closeAll()
  }

}
