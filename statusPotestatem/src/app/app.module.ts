import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {CurrentRawValuesComponent} from './currentRawValues/currentRawValues.component';
import {CurrentConsumptionComponent} from './currentConsumption/currentConsumption.component';
import {costsComponent} from './costs/costs.component';
import {pastConsumptionComponent} from './pastConsumption/pastConsumption.component';
import {trendComponent} from './trend/trend.component';

@NgModule({
  declarations: [
    AppComponent, CurrentRawValuesComponent, CurrentConsumptionComponent, costsComponent, pastConsumptionComponent, trendComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
