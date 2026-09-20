import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home') },
  { path: 'portfolio', loadComponent: () => import('./features/portfolio/portfolio') },
  { path: 'portfolio/:id', loadComponent: () => import('./features/portfolio/project-detail') },
  { path: 'blog', loadComponent: () => import('./features/blog/blog') },
  { path: 'blog/:id', loadComponent: () => import('./features/blog/blog-detail') },
  { path: '**', redirectTo: '' }
];
