import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedTableComponent } from './wanted-table.component';

describe('WantedTableComponent', () => {
  let component: WantedTableComponent;
  let fixture: ComponentFixture<WantedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
