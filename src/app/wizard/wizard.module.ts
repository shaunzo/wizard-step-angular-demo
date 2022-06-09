import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { StepIndicatorComponent } from './wizard/step-indicator/step-indicator.component';
import { StepIndicatorNumberComponent } from './wizard/step-indicator/step-indicator-number/step-indicator-number.component';



@NgModule({
  declarations: [
    WizardComponent,
    StepIndicatorComponent,
    StepIndicatorNumberComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WizardComponent
  ]
})
export class WizardModule { }
