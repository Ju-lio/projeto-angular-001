import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
