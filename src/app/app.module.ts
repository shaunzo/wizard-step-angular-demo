import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WizardModule } from './wizard/wizard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
