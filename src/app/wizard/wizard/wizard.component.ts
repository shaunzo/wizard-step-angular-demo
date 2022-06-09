import { Component, OnInit, OnDestroy } from '@angular/core';
import { Step } from '../interfaces/step.interface';
import { WizardService } from '../services/wizard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  steps: Step[];
  activeStep: Step;
  activeStepSubscription: Subscription;

  constructor( private wizardService: WizardService ) {}

  ngOnInit(): void {
    this.wizardService.setActiveStep(0);
    this.steps = this.wizardService.steps;
    this.activeStep = this.steps[this.wizardService.activeStepIndex];
    this.activeStepSubscription = this.wizardService.activeStep$.subscribe(step => this.changeStep(step.index));
  }

  changeStep(index: number) {
    this.wizardService.setActiveStep(index);
    this.activeStep = this.steps[this.wizardService.activeStepIndex];
  }

  ngOnDestroy():void {
    this.activeStepSubscription.unsubscribe();
  }

}
