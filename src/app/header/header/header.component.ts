import { Component, 
	ChangeDetectionStrategy, 
	ChangeDetectorRef,
	OnInit,
	OnDestroy } from '@angular/core';
import {LoginFormService} from 'src/app/auth/login-form.service';
import {AuthService} from '../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent{
title = 'fbi wanted';

  constructor(
	  public auth: AuthService,
	  public loginform: LoginFormService
	){}
}
