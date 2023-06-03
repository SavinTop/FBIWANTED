import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WantedItem } from '../../models/wanted-item';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(
    private dialog: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: WantedItem
  ){

  }

  submit(value: any){
    this.dialog.close(value)
    
  }
}
