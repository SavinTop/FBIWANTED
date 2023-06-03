import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

interface IDate{
  id: number
  date: Date
}

@Component({
  selector: 'app-multiple-data-picker',
  templateUrl: './multiple-data-picker.component.html',
  styleUrls: ['./multiple-data-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleDataPickerComponent),
      multi: true,
    }
  ]
})

export class MultipleDataPickerComponent implements OnInit, ControlValueAccessor  {
  dates: IDate[] = []
  lastId:number = 0
  disabled: boolean = false
  touched: boolean = false

  onChange = (dates: Date[]) => {};

  onTouched = () => {};


  constructor(private cd: ChangeDetectorRef){}

  writeValue(dates: Date[]): void {
    if(!dates){
      this.dates = []
      return
    }
    this.dates = dates.map((el, index)=>({date: el, id:index}))
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  addDataPicker(date:Date = new Date()){
    this.dates.push({id:this.lastId, date})
    this.lastId++
    this.onChange(this.dates.map(el=>el.date))
  }

  ngOnInit(): void {
    this.addDataPicker()
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  removeDataPicker(id: number){
    let realIndex = this.dates.findIndex((el)=>{
      return el.id === id
    })
    if(realIndex === -1) throw new Error("There is no such index")
    this.dates.splice(realIndex, 1)
    this.onChange(this.dates.map(el=>el.date))
  }
}
