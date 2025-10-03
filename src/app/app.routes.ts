import { Routes } from "@angular/router";
import { HomePage } from "./pages/home";
import { ProductPage } from "./pages/product";
import { PlaceholderPage } from "./pages/placeholder";
import { CollectionsPage } from "./pages/collections";

export const routes: Routes = [
  { path: "", component: HomePage },
  { path: "product/:handle", component: ProductPage },
  { path: "collections", component: CollectionsPage },
  { path: "contact", component: PlaceholderPage },
  { path: "signin", component: PlaceholderPage },
  { path: "**", component: PlaceholderPage },
];
