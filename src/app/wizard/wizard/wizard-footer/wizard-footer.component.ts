import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'app-wizard-footer',
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss']
})
export class WizardFooterComponent implements OnInit {
  @Output() changeStepIndex = new EventEmitter<{index: number}>()
  @Input() activeStep: Step;


  constructor() {}

  ngOnInit(): void {
  }

  nextStep() {
    if(this.activeStep.hasNext) this.changeStepIndex.emit({index: this.activeStep.index + 1});
  }

  prevStep() {
    if(this.activeStep.hasPrev) this.changeStepIndex.emit({index: this.activeStep.index - 1});
  }

}
