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

	requestWantedList(page: number, pageSize: number){
		return this.http.get<WantedList>("https://api.fbi.gov/wanted/v1/list", {
			params: {
				page,
				pageSize
			}
		})

	}

}
