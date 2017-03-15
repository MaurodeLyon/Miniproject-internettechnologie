import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CurrentRawValuesComponent } from './currentRawValues.component';
import { CurrentConsumptionComponent } from './currentConsumption.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CurrentRawValuesComponent, CurrentConsumptionComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
