import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CurrentRawValuesComponent} from './currentRawValues/currentRawValues.component';
import {CurrentConsumptionComponent} from './currentConsumption/currentConsumption.component';

const appRoutes: Routes = [
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
