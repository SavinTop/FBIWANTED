import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import { WantedItem } from '../../../models/wanted-item';
import { WantedList } from '../../../models/wanted-list';
import { Observable } from 'rxjs';
import { FbiapiService } from '../../../services/fbiapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edited-tab',
  templateUrl: './edited-tab.component.html',
  styleUrls: ['./edited-tab.component.css']
})
export class EditedTabComponent implements OnInit{

  constructor(
    private api: FbiapiService,
    private route: ActivatedRoute,
    private location: Location
  ){

  }

  columnsToDisplay = ['title','sex', 'race','eyes','hair']

	data: Observable<WantedItem[]> = new Observable<WantedItem[]> 

  currentRow: WantedItem | null = null

  ngOnInit(): void {
    this.data = this.api.getEditQueueList()
    this.data.subscribe(list=>{
      const uid = this.route.snapshot.paramMap.get('uid')
      if(uid){
        const temp = list.find(el=>el.uid === uid)
        if(temp){
          this.changePerson(temp) 
          return
        }
      }
      if(!list || !list.length) return
      this.changePerson(list[0])
    })
  }

	changePerson(row: WantedItem){
		this.currentRow = row
    this.location.replaceState('content/edited/'+row.uid)
	}

}
