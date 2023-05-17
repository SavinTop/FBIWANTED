import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule
  ],
  exports:[
	MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule
  ]
})
export class MaterialModule { }
