import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FbiContentComponent } from './fbi-content.component';
import { WantedTableComponent } from './components/wanted-table/wanted-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { WantedItemComponent } from './components/wanted-item/wanted-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditWantedItemComponent } from './components/edit-wanted-item/edit-wanted-item.component';
import { MultipleDataPickerComponent } from 'src/app/shared/multiple-data-picker/multiple-data-picker.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { EditedTabComponent } from './components/tabs/edited-tab/edited-tab.component';
import { WantedTabComponent } from './components/tabs/wanted-tab/wanted-tab.component';

const routes: Routes = [
  { path: '', component: FbiContentComponent,
    children: [
      {path: 'wanted', component: WantedTabComponent},
      {path: 'wanted/:uid', component: WantedTabComponent},
      {path: 'edited', component: EditedTabComponent},
      {path: 'edited/:uid', component: EditedTabComponent},
    ]
}
];

@NgModule({
  declarations: [
    FbiContentComponent,
    WantedTableComponent,
    WantedItemComponent,
    EditWantedItemComponent,
    MultipleDataPickerComponent,
    EditDialogComponent,
    EditedTabComponent,
    WantedTabComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FbiContentModule { }
