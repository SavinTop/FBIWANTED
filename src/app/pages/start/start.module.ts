import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import {SharedModule} from 'src/app/shared/shared/shared.module';
import {MaterialModule} from 'src/app/material/material.module';


const routes: Routes = [
  { path: '', component: StartComponent }
];

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
	SharedModule,
	MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class StartModule { }
