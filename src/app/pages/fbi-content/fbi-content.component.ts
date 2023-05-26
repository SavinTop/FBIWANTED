import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {WantedItem} from './models/wanted-item';
import {FbiapiService} from './services/fbiapi.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { WantedList } from './models/wanted-list';

@Component({
  selector: 'app-fbi-content',
  templateUrl: './fbi-content.component.html',
  styleUrls: ['./fbi-content.component.css']
})
export class FbiContentComponent implements OnInit {
	pickedPerson = new BehaviorSubject<WantedItem | null>(null)
	wantedList = new Observable<WantedList>()

	constructor(
	public api: FbiapiService,
	public cd: ChangeDetectorRef
	){
		
	}
	
	ngOnInit(): void {
		this.onPageChange({pageIndex: 1, pageSize: 25})
	}

	changePerson(row: WantedItem) : void{
		this.pickedPerson.next(row)
	}

	onPageChange(value: {pageIndex: number, pageSize:number}){
		this.wantedList = this.api.requestWantedList(value.pageIndex, value.pageSize).pipe(
			tap((list)=>{
				this.pickedPerson.next(list.items.at(0) ?? null)
			})
		)
	}
}
