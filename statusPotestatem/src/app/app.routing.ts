import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import { CurrentRawValuesComponent } from './currentRawValues.component';
import { CurrentConsumptionComponent } from './currentConsumption.component';

// import {DetailComponent} from './components/detail/detail.component';
// import {StatisticsComponent} from './components/statistics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'currentRawValues',
    component: CurrentRawValuesComponent
  },
  {
    path: 'currentConsumption',
    component: CurrentConsumptionComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
