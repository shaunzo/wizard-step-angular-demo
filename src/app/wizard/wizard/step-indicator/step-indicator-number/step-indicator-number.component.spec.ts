import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIndicatorNumberComponent } from './step-indicator-number.component';

describe('StepIndicatorNumberComponent', () => {
  let component: StepIndicatorNumberComponent;
  let fixture: ComponentFixture<StepIndicatorNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepIndicatorNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIndicatorNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
