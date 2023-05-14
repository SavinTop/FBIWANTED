import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService} from './auth/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
  public auth: AuthService
  ){}
}
