import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard'

const routes: Routes =[
    { path: 'home', 
	  loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule),
	  },
    { path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
		canMatch:[AuthGuard]},
    { path: 'content', 
		loadChildren: () => import('./pages/fbi-content/fbi-content.module').then(m => m.FbiContentModule),
		canMatch: [AuthGuard]},
	{
		path:'',
		pathMatch: 'full',
		redirectTo:'home'
	},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
