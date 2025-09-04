import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/post-list').then(m => m.PostList)
  },
  {
    path: 'post-form',
    loadComponent: () => import('./components/post-form').then(m => m.PostForm)
  }
];
