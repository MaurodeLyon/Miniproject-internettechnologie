import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import { CurrentEnergyConsumptionComponent } from './currentEnergyConsumption.component';

// import {DetailComponent} from './components/detail/detail.component';
// import {StatisticsComponent} from './components/statistics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'currentConsumption',
    component: CurrentEnergyConsumptionComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
