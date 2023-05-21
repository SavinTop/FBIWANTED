import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FbiContentComponent } from './fbi-content.component';
import { WantedTableComponent } from './components/wanted-table/wanted-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { WantedItemComponent } from './components/wanted-item/wanted-item.component';

const routes: Routes = [
  { path: '', component: FbiContentComponent }
];

@NgModule({
  declarations: [
    FbiContentComponent,
    WantedTableComponent,
    WantedItemComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class FbiContentModule { }
