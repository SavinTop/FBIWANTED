import { ChangeDetectorRef, Component, ContentChild, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject, Observable, debounce, debounceTime, distinctUntilChanged, first, fromEvent, skip, tap } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { WantedItem } from '../../../models/wanted-item';
import { WantedList } from '../../../models/wanted-list';
import { FbiapiService } from '../../../services/fbiapi.service';
import { WantedTableComponent } from '../../wanted-table/wanted-table.component';


@Component({
  selector: 'app-wanted-tab',
  templateUrl: './wanted-tab.component.html',
  styleUrls: ['./wanted-tab.component.css']
})
export class WantedTabComponent implements OnInit, OnDestroy {
	pickedPerson$ = new BehaviorSubject<WantedItem | null>(null)
	wantedList$ = new Observable<WantedList>()
	searchBar$ = new BehaviorSubject<string>('')

	editedSet = new Set<string>()

	DEFAULT_PAGE_SIZE = 25

	@ViewChild(WantedTableComponent) wtc!:WantedTableComponent;

	get value(){
		return this.searchBar$.value
	}

	set value(val:string){
		this.searchBar$.next(val)
	}

	constructor(
	public api: FbiapiService,
	public cd: ChangeDetectorRef,
	private router: Router,
	private activeRoute: ActivatedRoute,
	private location: Location
	){
		
	}
	
	ngOnInit(): void {

		

		this.api.getEditQueueList().subscribe(list=>{
			this.editedSet = new Set<string>(list.map(el=>el.uid))
			this.cd.detectChanges()
		})


		this.wantedList$ = this.api.requestWantedList(1, this.DEFAULT_PAGE_SIZE, '')

		this.wantedList$.subscribe(list=>{
			const uid = this.activeRoute.snapshot.paramMap.get('uid')

			if(uid){
				const temp = list.items.find(el=>el.uid === uid)
				if(temp){
			      this.changePerson(temp)
				  return
				}
			  }
			  if(!list.items || !list.items.length) return
			  this.changePerson(list.items[0])

			this.searchBar$.pipe(
				skip(1),
				debounceTime(500),
				distinctUntilChanged()
			).subscribe(el=>{
				this.onPageChange({pageIndex: 1, pageSize: this.wtc?.currentPageSize ?? this.DEFAULT_PAGE_SIZE })
				this.cd.detectChanges()
			})
		})

		
	}

	changePerson(row: WantedItem) : void{
		this.pickedPerson$.next(row)
		this.location.replaceState('content/wanted/'+row.uid)
	}

	onPageChange(value: {pageIndex: number, pageSize:number}){
		this.wantedList$ = this.api.requestWantedList(value.pageIndex, value.pageSize, this.value).pipe(
			tap((list)=>{
				if(!list.items) return 
				this.changePerson(list.items[0])
			})
		)
	}

	updateEditedList(newItem: WantedItem){
      this.editedSet = new Set<string>([...this.editedSet])
      this.editedSet.add(newItem.uid)
	}

	ngOnDestroy(): void {
		this.searchBar$.unsubscribe()
	}


	editedClicked(uid: string){
		this.router.navigate(['content','edited',uid])
	}
}