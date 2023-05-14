import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../auth/login/login.component'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
	constructor(
		public auth:AuthService,
		public loginDialog: MatDialog
	){}
	
	openLoginDialog(): void {
    this.loginDialog.open(LoginComponent);
  }
}
