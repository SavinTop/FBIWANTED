import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFromEmailPipe } from '../name-from-email.pipe';
import { MatNativeDateModule } from '@angular/material/core';


MatNativeDateModule

@NgModule({
  declarations: [NameFromEmailPipe],
  imports: [
    CommonModule,
    MatNativeDateModule
  ],
  exports: [NameFromEmailPipe]
})
export class SharedModule { }
