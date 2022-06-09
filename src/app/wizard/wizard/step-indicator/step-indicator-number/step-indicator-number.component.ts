import { Component, OnInit, Input } from '@angular/core';
import { Step } from '../../../interfaces/step.interface';

@Component({
  selector: 'app-step-indicator-number',
  templateUrl: './step-indicator-number.component.html',
  styleUrls: ['./step-indicator-number.component.scss']
})
export class StepIndicatorNumberComponent implements OnInit {

  @Input() stepNumber: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
