import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'app-wizard-content',
  templateUrl: './wizard-content.component.html',
  styleUrls: ['./wizard-content.component.scss']
})
export class WizardContentComponent implements OnInit {

  @Input() activeStep: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
