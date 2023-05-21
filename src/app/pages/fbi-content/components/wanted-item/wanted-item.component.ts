import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {WantedItem} from '../../models/wanted-item';

@Component({
  selector: 'app-wanted-item',
  templateUrl: './wanted-item.component.html',
  styleUrls: ['./wanted-item.component.css']
})
export class WantedItemComponent implements OnChanges {
	@Input() person: WantedItem | null = null
	
	ngOnChanges(changes: SimpleChanges){
		console.log(this.person)
	}
	
}
