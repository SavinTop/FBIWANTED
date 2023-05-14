import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import {MaterialModule} from './material/material.module'
import { StartComponent } from './pages/start/start.component'
import { FbiContentComponent } from './pages/fbi-content/fbi-content.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { SharedModule } from './shared/shared/shared.module';
import {AuthGuard} from './auth/auth.guard'

const appRoutes: Routes =[
    { path: '', component: StartComponent},
    { path: 'content', component: FbiContentComponent, canActivate:[AuthGuard]},
    { path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FbiContentComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
