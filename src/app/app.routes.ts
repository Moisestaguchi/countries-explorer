import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    loadComponent: () =>
      import('./features/countries/pages/countries-list/countries-list.component')
        .then(m => m.CountriesListComponent)
  },
  {
    path: 'countries/:code',
    loadComponent: () =>
      import('./features/countries/pages/country-detail/country-detail.component')
        .then(m => m.CountryDetailComponent)
  }
];