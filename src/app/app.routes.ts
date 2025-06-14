import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about').then(m => m.About)
  },
  {
    path: 'posts',
    loadComponent: () => import('./components/posts').then(m => m.Posts)
  },
  {
    path: 'data',
    loadComponent: () => import('./components/data').then(m => m.Data)
  }
];
