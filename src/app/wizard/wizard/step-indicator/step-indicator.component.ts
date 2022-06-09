import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../../interfaces/step.interface';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit {

  @Input() steps: Step[];

  constructor( private wizardService: WizardService  ) { }

  ngOnInit(): void {
  }

  changeStep(step: Step) {
    this.wizardService.activeStep$.next(step);
  }

}
