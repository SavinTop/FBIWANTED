import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService} from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
  public auth: AuthService,
  public route: ActivatedRoute
  ){}

  ngOnInit(): void {
  	this.route.url.subscribe((val)=>{
		console.log(val)
	})
  }
}
