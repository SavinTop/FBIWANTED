import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {WantedItem} from './models/wanted-item';
import {FbiapiService} from './services/fbiapi.service';

@Component({
  selector: 'app-fbi-content',
  templateUrl: './fbi-content.component.html',
  styleUrls: ['./fbi-content.component.css']
})
export class FbiContentComponent implements OnInit {
	pickedPerson: WantedItem | null = null

	constructor(
	public api: FbiapiService,
	public cd: ChangeDetectorRef
	){
		
	}
	
	ngOnInit(): void {
		this.api.updateWantedList(1, 50)
		this.api.wantedList.subscribe(el=>{
			console.log(el)
			this.pickedPerson = el.items[0]
		})
	}

	changePerson(row: WantedItem) : void{
		this.pickedPerson = row
	}
}
