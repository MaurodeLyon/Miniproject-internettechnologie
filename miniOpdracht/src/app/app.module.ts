import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { ChartsModule } from 'ng2-charts';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home.component';
import {StatisticsComponent} from './components/statistics.component';
import {DetailComponent} from './components/detail/detail.component';
import {PersonComponent} from './components/person.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent, StatisticsComponent,PersonComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
