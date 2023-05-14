import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import {AuthModule} from '../auth/auth.module'
import {MaterialModule} from '../material/material.module'
import { SharedModule } from '../shared/shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MaterialModule,
    AuthModule,
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule { }
