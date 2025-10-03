import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../components/product-card';
import { ParallaxDirective } from '../directives/parallax.directive';
import { products, collections } from '../data/mock-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, ParallaxDirective],
  template: `
    <section class="relative overflow-hidden">
      <div [appParallax]="0.25" class="h-[60vh] bg-[url('https://images.unsplash.com/photo-1520975922215-230f6c1d5b21?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center flex items-center">
        <div class="container mx-auto px-4 text-white">
          <h1 class="text-4xl md:text-6xl font-serif font-bold">Effortless Elegance</h1>
          <p class="mt-4 max-w-xl text-lg">A curated collection of modern essentials. Inspired by TheLabelLife.</p>
          <a routerLink="/collections" class="mt-6 inline-block rounded bg-white/90 px-6 py-3 text-sm font-medium text-neutral-900">Shop New Arrivals</a>
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
}
