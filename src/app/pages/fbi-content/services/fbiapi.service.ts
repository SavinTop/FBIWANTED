import {HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { WantedItem } from '../models/wanted-item';
import {WantedList} from '../models/wanted-list';
import { Subject, Observable, BehaviorSubject, map, debounce, debounceTime, tap, switchMap, EMPTY, ReplaySubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FbiapiService  {

	constructor(private http: HttpClient) { }

	requestWantedList(page: number, pageSize: number, title: string = ''){
		return this.http.get<WantedList>("https://api.fbi.gov/wanted/v1/list", {
			params: {
				page,
				pageSize,
				title
			}
		})

	}

	getEditQueueList() : Observable<WantedItem[]>{
		return this.http.get<WantedItem[]>("https://647632afe607ba4797dd6fda.mockapi.io/wanted/mock/edit-queue", {
		})
	}

	markForEdit(item:WantedItem){
		return this.http.post<WantedItem>("https://647632afe607ba4797dd6fda.mockapi.io/wanted/mock/edit-queue", item)
	}

}
