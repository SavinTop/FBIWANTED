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
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

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
	MatProgressBarModule,
	MatTableModule,
	MatPaginatorModule,
	MatCardModule,
	MatDividerModule
  ],
  exports:[
	MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatTableModule,
	MatPaginatorModule,
	MatCardModule,
	MatDividerModule
  ]
})
export class MaterialModule { }
