import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { WantedItem } from '../../models/wanted-item';

@Component({
  selector: 'app-edit-wanted-item',
  templateUrl: './edit-wanted-item.component.html',
  styleUrls: ['./edit-wanted-item.component.css']
})
export class EditWantedItemComponent implements OnInit{
    constructor(private fb: FormBuilder){

      
    }

    itemEditForm!: FormGroup

    ngOnInit(): void {
      this.itemEditForm = this.fb.group({
        title: [this.formData.title],
        sex: [this.formData.sex],
        race: [this.formData.race],
        eyes: [this.formData.eyes],
        hair: [this.formData.hair],
        description: [this.formData.description],
        remarks: [this.formData.remarks],
        dates_of_birth_used: [this.formData.dates_of_birth_used?.map(el=>new Date(el))],
      });
    }

    submitBtn(){

      this.submitValue.emit({
        ...this.formData,
        ...this.itemEditForm?.value,
        dates_of_birth_used: this.itemEditForm?.value.dates_of_birth_used?.map((el:Date)=>el.toLocaleDateString("en-US"))
      })
    }
    
    @Input() formData! : WantedItem 
    @Output('submit') submitValue = new EventEmitter() 
}
