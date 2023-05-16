import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FbiContentComponent } from './fbi-content.component';


const routes: Routes = [
  { path: '', component: FbiContentComponent }
];

@NgModule({
  declarations: [
    FbiContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FbiContentModule { }
