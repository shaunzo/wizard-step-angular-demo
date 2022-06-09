import { Component, OnInit } from '@angular/core';
import { Step } from '../interfaces/step.interface';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

 // steps: Step[];

  constructor() { }

  ngOnInit(): void {
  }

}
