import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedItemComponent } from './wanted-item.component';

describe('WantedItemComponent', () => {
  let component: WantedItemComponent;
  let fixture: ComponentFixture<WantedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
