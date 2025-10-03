import { Routes } from '@angular/router';
import { HomePage } from './pages/home';
import { ProductPage } from './pages/product';
import { PlaceholderPage } from './pages/placeholder';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'product/:handle', component: ProductPage },
  { path: 'collections', component: PlaceholderPage },
  { path: 'contact', component: PlaceholderPage },
  { path: 'signin', component: PlaceholderPage },
  { path: '**', component: PlaceholderPage },
];
