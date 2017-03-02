import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home.component';
import {DetailComponent} from './components/detail.component';
import {StatisticsComponent} from './components/statistics.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent, StatisticsComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
