import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor() { }

  activeStep$ = new Subject<Step>();
  activeStepIndex: number = 0;

  steps:Step[] =[
    {
      index: 0,
      number: 1,
      text: 'You have continued here - step 1',
      active: true,
      hasNext: true,
      hasPrev: false
    }, {
      index: 1,
      number: 2,
      text: 'You have continued here - step 2',
      active: false,
      hasNext: true,
      hasPrev: true
    }, {
      index: 2,
      number: 3,
      text: 'You have continued here - step 3',
      active: false,
      hasNext: false,
      hasPrev: true
    }
  ];

  setActiveStep(index: number) {
    this.resetActiveStep();
    this.activeStepIndex = index;
    this.steps[this.activeStepIndex].active = true;
  }

  private resetActiveStep() {

    this.steps.forEach((i, index) => {
      i.active = false;
      i.hasNext = true;
      i.hasPrev = true;
      i.index = index;
      i.number = index + 1;
    });

    this.steps[0].hasPrev = false;
    this.steps[this.steps.length - 1].hasNext = false;
    this.steps[this.activeStepIndex].active = false;
  }
}
