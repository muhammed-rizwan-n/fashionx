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
          <div class="card overflow-hidden">
            <img [src]="product.images[0]" class="w-full h-[520px] object-cover" alt="{{ product.title }}" />
            <div class="p-4 flex gap-2">
              <img *ngFor="let img of product.images" [src]="img" class="h-16 w-16 rounded object-cover" />
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-3xl font-serif font-bold">{{ product.title }}</h1>
          <div class="mt-3 flex items-baseline gap-4">
            <div class="text-2xl font-bold">₹{{ product.price }}</div>
            <div *ngIf="product.compareAtPrice" class="text-sm line-through text-neutral-500">₹{{ product.compareAtPrice }}</div>
          </div>
          <p class="mt-6 text-neutral-600">This product blends contemporary tailoring with timeless fabrics. Perfect for day-to-night styling.</p>
          <div class="mt-6 flex items-center gap-3">
            <select class="rounded-md border border-neutral-200 px-3 py-2 text-sm">
              <option>Size: S</option>
              <option>Size: M</option>
              <option>Size: L</option>
            </select>
            <input type="number" min="1" value="1" class="w-20 rounded-md border border-neutral-200 px-3 py-2 text-sm" />
          </div>

          <div class="mt-6 flex gap-3">
            <button class="rounded-md bg-gradient-to-r from-brand-500 to-accent px-6 py-3 text-white font-medium" (click)="addToCart()">Add to cart</button>
            <button class="rounded-md border border-neutral-300 px-4 py-3">Wishlist</button>
          </div>

          <div class="mt-10 text-sm text-neutral-600">
            <h4 class="font-semibold">Details</h4>
            <p class="mt-2">High quality fabric, soft touch, machine washable.</p>
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
