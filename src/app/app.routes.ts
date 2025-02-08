import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsProfileComponent } from './settings/settings-profile/settings-profile.component';
import { authGuard } from './auth.guard';
import { pageResolver } from './data.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Title dashboard',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Title products',
    // Lazy Loading Component
    // loadComponent: () =>
    //   import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Title settings',
    children: [
      {
        path: 'profile',
        component: SettingsProfileComponent,
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'pages/:pageId',
    component: PageComponent,
    resolve: {
      page: pageResolver,
    },
  },
  {
    path: 'old-pages/:pageId',
    redirectTo: (route) => {
      return `/pages/${route.params['pageId']}`;
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
