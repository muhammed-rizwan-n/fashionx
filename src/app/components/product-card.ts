import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgIf, NgClass, CommonModule } from '@angular/common';
import { Product } from '../data/types';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, NgIf, NgClass],
  template: `
    <div class="group relative card">
      <a [routerLink]="['/product', product.handle]" class="block overflow-hidden">
        <div class="relative aspect-[4/5] bg-neutral-100">
          <img
            [ngSrc]="product.images[0]"
            alt="{{ product.title }} image"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            width="600"
            height="800"
          />
          <div class="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-xs font-medium">New</div>
        </div>
      </a>
      <div class="p-4">
        <h3 class="text-sm md:text-base font-medium text-neutral-900 line-clamp-2">{{ product.title }}</h3>
        <div class="mt-2 flex items-baseline justify-between">
          <div class="text-base font-semibold">₹{{ product.price }}</div>
          <div *ngIf="product.compareAtPrice" class="text-xs text-neutral-500 line-through">₹{{ product.compareAtPrice }}</div>
        </div>
        <div class="mt-3 flex gap-2">
          <button (click)="addToCart()" class="flex-1 rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800">Add to cart</button>
          <button class="rounded-md border border-neutral-200 px-3 py-2 text-sm">Quick view</button>
        </div>
      </div>
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
