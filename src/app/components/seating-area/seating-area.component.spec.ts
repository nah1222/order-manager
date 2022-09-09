import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatingAreaComponent } from './seating-area.component';

describe('SeatingAreaComponent', () => {
  let component: SeatingAreaComponent;
  let fixture: ComponentFixture<SeatingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
