import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {StatisticsComponent} from './components/statistics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
