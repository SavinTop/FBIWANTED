import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {BehaviorSubject, map, tap} from 'rxjs';
import { FbiapiService } from '../../services/fbiapi.service';
import { PageEvent } from '@angular/material/paginator';
import {WantedList} from '../../models/wanted-list';
import {WantedItem} from '../../models/wanted-item';

@Component({
  selector: 'app-wanted-table',
  templateUrl: './wanted-table.component.html',
  styleUrls: ['./wanted-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WantedTableComponent {
	columnsToDisplay = ['title','sex', 'race','eyes','hair', 'edited']

	@Input()
	data: WantedList|null = null

	@Input()
	editedUids: Set<string> = new Set()

	@Output()
	onPerson = new EventEmitter<WantedItem>()

	@Output()
	onPageChange = new EventEmitter<{pageIndex:number, pageSize: number}>()

	currentPageSize: number = 25

	constructor(public api:FbiapiService,
				public cd: ChangeDetectorRef
			   ){
		
	}

	handlePageEvent(event: PageEvent){
		this.currentPageSize = event.pageSize
		this.onPageChange.emit({pageIndex: event.pageIndex+1, pageSize: event.pageSize})
	}

	handleRowClick($row: WantedItem){
		this.onPerson.emit($row)
	}


	@Output() editedClicked = new EventEmitter()
}
