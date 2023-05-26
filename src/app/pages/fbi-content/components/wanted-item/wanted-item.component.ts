import { Component, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { WantedItem } from '../../models/wanted-item';

@Component({
	selector: 'app-wanted-item',
	templateUrl: './wanted-item.component.html',
	styleUrls: ['./wanted-item.component.css']
})
export class WantedItemComponent implements OnChanges {
	@Input() person: WantedItem | null = null
	@ViewChild("personImg") imgPerson!: ElementRef
	imgLoading = false

	ngOnChanges(changes: SimpleChanges) {
		if (changes['person']?.previousValue !== changes['person']?.currentValue) {
			this.imgLoading = true
			this.imgPerson.nativeElement.src = ""
		}
	}

	imageLoadHandler(): void {
		this.imgLoading = false
	}
}
