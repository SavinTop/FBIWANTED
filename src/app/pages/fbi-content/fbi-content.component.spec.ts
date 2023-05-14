import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbiContentComponent } from './fbi-content.component';

describe('FbiContentComponent', () => {
  let component: FbiContentComponent;
  let fixture: ComponentFixture<FbiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbiContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
