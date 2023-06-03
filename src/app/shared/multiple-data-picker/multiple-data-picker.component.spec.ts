import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDataPickerComponent } from './multiple-data-picker.component';

describe('MultipleDataPickerComponent', () => {
  let component: MultipleDataPickerComponent;
  let fixture: ComponentFixture<MultipleDataPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDataPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleDataPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
