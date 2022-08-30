import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home/:id',
    loadChildren: () =>
      import('src/app/modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/modules/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
