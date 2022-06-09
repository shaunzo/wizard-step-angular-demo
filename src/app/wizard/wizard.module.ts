import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { StepIndicatorComponent } from './wizard/step-indicator/step-indicator.component';
import { StepIndicatorNumberComponent } from './wizard/step-indicator/step-indicator-number/step-indicator-number.component';
import { WizardFooterComponent } from './wizard/wizard-footer/wizard-footer.component';
import { WizardContentComponent } from './wizard/wizard-content/wizard-content.component';



@NgModule({
  declarations: [
    WizardComponent,
    StepIndicatorComponent,
    StepIndicatorNumberComponent,
    WizardFooterComponent,
    WizardContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WizardComponent
  ]
})
export class WizardModule { }
