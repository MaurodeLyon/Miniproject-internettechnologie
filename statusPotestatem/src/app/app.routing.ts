import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CurrentRawValuesComponent} from './currentRawValues/currentRawValues.component';
import {CurrentConsumptionComponent} from './currentConsumption/currentConsumption.component';
import {costsComponent} from './costs/costs.component';
import {pastConsumptionComponent} from './pastConsumption/pastConsumption.component';
import {trendComponent} from './trend/trend.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CurrentRawValuesComponent
  },
  {
    path: 'currentConsumption',
    component: CurrentConsumptionComponent
  },
  {
    path: 'costs',
    component: costsComponent
  },
  {
    path: 'pastConsumption',
    component: pastConsumptionComponent
  },
  {
    path: 'trend',
    component: trendComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
