import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFromEmailPipe } from '../name-from-email.pipe';


@NgModule({
  declarations: [NameFromEmailPipe],
  imports: [
    CommonModule
  ],
  exports: [NameFromEmailPipe]
})
export class SharedModule { }
