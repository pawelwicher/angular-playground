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
    loadComponent: () => import('./components/all-posts').then(m => m.Posts)
  },
  {
    path: 'big-string-array',
    loadComponent: () => import('./components/big-string-array').then(m => m.BigStringArray)
  }
];
