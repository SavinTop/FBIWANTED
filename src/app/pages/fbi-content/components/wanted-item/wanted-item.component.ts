import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { WantedItem } from '../../models/wanted-item';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { first } from 'rxjs/operators';
import { FbiapiService } from '../../services/fbiapi.service';

@Component({
	selector: 'app-wanted-item',
	templateUrl: './wanted-item.component.html',
	styleUrls: ['./wanted-item.component.css']
})
export class WantedItemComponent {
	@Input() person: WantedItem | null = null
	@Input() editable: boolean = false

	@Output() personEdited = new EventEmitter()

	constructor(
		private dialog: MatDialog,
		private api: FbiapiService
	){

	}

	openEditDialog(){
		this.dialog.open(EditDialogComponent, {
			data: this.person
		}).afterClosed().pipe(first()).subscribe((newItem=>{
			if(!newItem) return
			this.api.markForEdit(newItem).subscribe()
			this.personEdited.emit(newItem)
		}))
	}
}
