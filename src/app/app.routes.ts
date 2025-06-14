import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home').then(m => m.Home) },
  { path: 'foo', loadComponent: () => import('./components/foo').then(m => m.Foo) }
];
