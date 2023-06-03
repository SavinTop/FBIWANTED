import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedTabComponent } from './edited-tab.component';

describe('EditedTabComponent', () => {
  let component: EditedTabComponent;
  let fixture: ComponentFixture<EditedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
