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
	columnsToDisplay = ['title','status','sex', 'race','eyes','hair']

	@Input()
	data: WantedList|null = null

	@Output()
	onPerson = new EventEmitter<WantedItem>()

	constructor(public api:FbiapiService,
				public cd: ChangeDetectorRef
			   ){
		
	}

	handlePageEvent($event: PageEvent){
		this.api.updateWantedList($event.pageIndex+1, $event.pageSize)
	}

	handleRowClick($row: WantedItem){
		this.onPerson.emit($row)
	}

}
