import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { products } from '../data/mock-data';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product; else notfound" class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img [src]="product.images[0]" class="w-full rounded-lg object-cover" alt="{{ product.title }}" />
        </div>
        <div>
          <h1 class="text-2xl font-semibold">{{ product.title }}</h1>
          <div class="mt-2 text-xl font-bold">₹{{ product.price }}</div>
          <p class="mt-4 text-neutral-600">A beautiful product inspired by modern minimalism.</p>
          <div class="mt-6 flex gap-3">
            <button class="rounded-md bg-neutral-900 px-4 py-3 text-white" (click)="addToCart()">Add to cart</button>
            <button class="rounded-md border border-neutral-300 px-4 py-3">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
    <ng-template #notfound>
      <div class="container mx-auto px-4 py-12 text-center">Product not found</div>
    </ng-template>
  `,
})
export class ProductPage {
  product = null as any;
  constructor(route: ActivatedRoute, private cart: CartService) {
    const handle = route.snapshot.paramMap.get('handle');
    this.product = products.find((p) => p.handle === handle) || null;
  }
  addToCart() {
    if (this.product) this.cart.add(this.product, 1);
  }
}
