import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../components/product-card";
import { collections, products } from "../data/mock-data";
import { RouterLink } from "@angular/router";
import { ScrollRevealDirective } from "../directives/scroll-reveal.directive";

@Component({
  selector: "app-collections",
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    RouterLink,
    ScrollRevealDirective,
  ],
  template: `
    <div class="container mx-auto px-4 py-12">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-8"
        [appScrollReveal]="0.12"
      >
        <aside class="md:col-span-1">
          <div class="card p-4">
            <h3 class="font-semibold mb-3">Collections</h3>
            <ul class="space-y-2 text-sm text-neutral-700">
              <li *ngFor="let c of collections">
                <a
                  routerLink="/collections"
                  [queryParams]="{ handle: c.handle }"
                  class="block p-2 rounded hover:bg-neutral-50"
                  >{{ c.title }}</a
                >
              </li>
            </ul>
          </div>
          <div class="card mt-6 p-4">
            <h4 class="font-semibold mb-3">Filters</h4>
            <p class="text-sm text-neutral-600">
              Size, color and price filters would go here.
            </p>
          </div>
        </aside>
        <section class="md:col-span-3">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-semibold">Shop All</h2>
            <div class="text-sm text-neutral-600">
              Showing {{ products.length }} products
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <app-product-card
              *ngFor="let p of products"
              [product]="p"
            ></app-product-card>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class CollectionsPage {
  collections = collections;
  products = products;
}
