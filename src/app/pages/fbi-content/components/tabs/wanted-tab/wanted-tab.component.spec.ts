import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedTabComponent } from './wanted-tab.component';

describe('WantedTabComponent', () => {
  let component: WantedTabComponent;
  let fixture: ComponentFixture<WantedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantedTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
