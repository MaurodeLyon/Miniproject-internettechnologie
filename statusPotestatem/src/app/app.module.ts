import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CurrentEnergyConsumptionComponent } from './currentEnergyConsumption.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CurrentEnergyConsumptionComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
