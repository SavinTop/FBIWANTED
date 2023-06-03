import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWantedItemComponent } from './edit-wanted-item.component';

describe('EditWantedItemComponent', () => {
  let component: EditWantedItemComponent;
  let fixture: ComponentFixture<EditWantedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWantedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWantedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
