import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'agregar-publicacion',
    loadComponent: () => import('./paginas/agregar-publicacion/agregar-publicacion.page').then( m => m.AgregarPublicacionPage)
  },
];
