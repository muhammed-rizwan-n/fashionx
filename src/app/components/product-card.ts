import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgIf, NgClass } from '@angular/common';
import { Product } from '../data/types';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgIf, NgClass],
  template: `
    <div class="group relative bg-white rounded-lg shadow-box overflow-hidden border border-neutral-200">
      <a [routerLink]="['/product', product.handle]" class="block aspect-[3/4] overflow-hidden">
        <img
          [ngSrc]="product.images[0]"
          alt="{{ product.title }} image"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          width="600"
          height="800"
        />
      </a>
      <div class="p-4">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-sm md:text-base font-semibold text-neutral-900 line-clamp-2">{{ product.title }}</h3>
          <div class="text-right">
            <div class="text-sm md:text-base font-semibold text-neutral-900">₹{{ product.price | number:'1.0-0' }}</div>
            <div *ngIf="product.compareAtPrice" class="text-xs text-neutral-500 line-through">₹{{ product.compareAtPrice }}</div>
          </div>
        </div>
        <button (click)="addToCart()" class="mt-3 w-full btn btn-primary">Add to cart</button>
      </div>
      <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <img
          *ngIf="product.images[1]"
          [ngSrc]="product.images[1]"
          alt="{{ product.title }} alternate image"
          class="h-full w-full object-cover"
          width="600"
          height="800"
        />
      </div>
      <div class="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none"></div>
    </div>
  `,
  styles: [
    `:host { display: block; }
     .btn { @apply inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors; }
     .btn-primary { @apply bg-neutral-900 text-white hover:bg-neutral-800; }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor(private cart: CartService) {}
  addToCart() {
    this.cart.add(this.product, 1);
  }
}
