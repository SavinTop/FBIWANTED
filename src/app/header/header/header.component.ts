import { Component, 
	ChangeDetectionStrategy, 
	ChangeDetectorRef,
	OnInit,
	OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../auth/login/login.component'
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
	public loginDialog: MatDialog,
	){}
	
  openLoginDialog(): void {
    this.loginDialog.open(LoginComponent);
  }
}
