import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';
import {LoginFormService} from 'src/app/auth/login-form.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
	
	constructor(
		public loginform: LoginFormService,
		public auth: AuthService
	){}

}
