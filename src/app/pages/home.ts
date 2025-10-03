import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../components/product-card';
import { ParallaxDirective } from '../directives/parallax.directive';
import { products, collections } from '../data/mock-data';

const ATTACH1 = 'https://cdn.builder.io/api/v1/image/assets%2F42f34e0d4e9f49d39977f8d378373b8d%2F4fbb655fffbd4767b31fea6a9c4af747?format=webp&width=1600';
const ATTACH2 = 'https://cdn.builder.io/api/v1/image/assets%2F42f34e0d4e9f49d39977f8d378373b8d%2Fbf1f43ccea894239928b21c6f3c7b736?format=webp&width=1600';
const ATTACH3 = 'https://cdn.builder.io/api/v1/image/assets%2F42f34e0d4e9f49d39977f8d378373b8d%2F8c6a779c7d5f438abea2f18cc34dcb94?format=webp&width=1600';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, ParallaxDirective],
  template: `
    <section class="relative overflow-hidden">
      <div class="h-[72vh] md:h-[86vh]">
        <div class="grid grid-cols-1 md:grid-cols-3 h-full">
          <div class="col-span-2 relative">
            <div class="absolute inset-0 bg-cover bg-center" [ngStyle]="{'background-image': 'url(' + attach1 + ')'}"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
            <div class="relative z-10 container mx-auto h-full flex items-center px-6">
              <div class="max-w-xl text-white">
                <div class="text-sm uppercase tracking-wider mb-4">New season</div>
                <h1 class="text-4xl md:text-6xl font-serif font-bold leading-tight">Elevated Everyday</h1>
                <p class="mt-4 text-lg text-white/90">A modern edit of elevated essentials — expert tailoring and premium fabrics.</p>
                <a routerLink="/collections" class="mt-6 inline-block rounded bg-white px-6 py-3 text-sm font-medium text-neutral-900">Shop the edit</a>
              </div>
            </div>
          </div>

          <div class="col-span-1 grid grid-rows-2 gap-4">
            <div class="relative bg-cover bg-center" [ngStyle]="{'background-image': 'url(' + attach2 + ')'}">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
              <div class="p-6 absolute bottom-4 left-4 text-white">
                <div class="text-sm uppercase">Signature pieces</div>
              </div>
            </div>
            <div class="relative bg-cover bg-center" [ngStyle]="{'background-image': 'url(' + attach3 + ')'}">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
              <div class="p-6 absolute bottom-4 left-4 text-white">
                <div class="text-sm uppercase">Shop the look</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold mb-6">Featured Collections</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <a *ngFor="let c of collections" routerLink="/collections" class="group block overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <div class="aspect-[4/3] bg-cover bg-center" [ngStyle]="{'background-image': 'url(' + c.image + ')'}"></div>
          <div class="p-3 text-sm font-medium">{{ c.title }}</div>
        </a>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Popular Picks</h2>
        <a routerLink="/collections" class="text-sm text-neutral-600">View all</a>
      </div>
      <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <app-product-card *ngFor="let p of products.slice(0,8)" [product]="p"></app-product-card>
      </div>
    </section>
  `,
})
export class HomePage {
  products = products;
  collections = collections;
  attach1 = ATTACH1;
  attach2 = ATTACH2;
  attach3 = ATTACH3;
}
