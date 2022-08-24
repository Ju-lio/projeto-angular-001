import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home/:usr', component: HomeComponent },
  /*
    path: 'home/:usr',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  */
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
