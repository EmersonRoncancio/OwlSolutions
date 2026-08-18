import { Routes } from '@angular/router';

import { Home } from './home/home';

/**
 * Every public route is a real URL with its own metadata and content.
 * Feature pages are lazy so the home bundle stays as small as it is today.
 */
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'pos',
    loadComponent: () => import('./pos/pos').then((m) => m.Pos),
  },
  {
    path: 'pos-restaurantes',
    loadComponent: () => import('./pos-restaurantes/pos-restaurantes').then((m) => m.PosRestaurantes),
  },
  {
    path: 'pos-tiendas',
    loadComponent: () => import('./pos-tiendas/pos-tiendas').then((m) => m.PosTiendas),
  },
  {
    path: 'facturacion-electronica',
    loadComponent: () =>
      import('./facturacion-electronica/facturacion-electronica').then((m) => m.FacturacionElectronica),
  },
  {
    path: 'agentes-ia',
    loadComponent: () => import('./agentes-ia/agentes-ia').then((m) => m.AgentesIa),
  },
  {
    path: 'plataforma-ventas',
    loadComponent: () =>
      import('./plataforma-ventas/plataforma-ventas').then((m) => m.PlataformaVentas),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./nosotros/nosotros').then((m) => m.Nosotros),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./blog/post/post').then((m) => m.Post),
  },
  {
    // Prerendered so static hosts can serve a real 404 document (see tools/postbuild.mjs).
    path: '404',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
