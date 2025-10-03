import { Component, Signal } from "@angular/core";
import { NgFor, NgIf, CommonModule } from "@angular/common";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart-drawer",
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  template: `
    <div
      *ngIf="open()"
      class="fixed inset-0 z-40 bg-black/40"
      (click)="cart.toggle(false)"
    ></div>
    <aside
      class="fixed right-0 top-0 z-50 h-full w-full max-w-md translate-x-0 transform bg-white shadow-2xl transition-transform"
      [class.translate-x-full]="!open()"
    >
      <div class="flex h-full flex-col">
        <header
          class="flex items-center justify-between border-b border-neutral-200 p-4"
        >
          <h2 class="text-lg font-semibold">Cart ({{ cart.count() }})</h2>
          <button
            class="text-sm text-neutral-500 hover:text-neutral-900"
            (click)="cart.toggle(false)"
          >
            Close
          </button>
        </header>
        <div class="flex-1 divide-y divide-neutral-100 overflow-auto p-4">
          <div
            *ngIf="items().length === 0"
            class="py-10 text-center text-neutral-500"
          >
            Your cart is empty
          </div>
          <div *ngFor="let i of items()" class="flex items-center gap-3 py-3">
            <img
              [src]="i.product.images[0]"
              class="h-16 w-16 rounded object-cover"
              alt="{{ i.product.title }}"
            />
            <div class="flex-1">
              <div class="text-sm font-medium">{{ i.product.title }}</div>
              <div class="text-xs text-neutral-500">
                ₹{{ i.product.price | number: "1.0-0" }}
              </div>
              <div class="mt-2 flex items-center gap-2 text-xs">
                <button
                  class="px-2 py-1 bg-neutral-100 rounded"
                  (click)="dec(i.product.id)"
                >
                  -
                </button>
                <div class="w-6 text-center">{{ i.quantity }}</div>
                <button
                  class="px-2 py-1 bg-neutral-100 rounded"
                  (click)="inc(i.product.id)"
                >
                  +
                </button>
                <button
                  class="ml-3 text-red-600"
                  (click)="cart.remove(i.product.id)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer class="border-t border-neutral-200 p-4">
          <div class="flex items-center justify-between text-sm">
            <div class="text-neutral-600">Subtotal</div>
            <div class="font-semibold">₹{{ subtotal() | number: "1.0-0" }}</div>
          </div>
          <button
            class="mt-4 w-full rounded-md bg-neutral-900 px-4 py-3 text-white hover:bg-neutral-800"
          >
            Checkout
          </button>
        </footer>
      </div>
    </aside>
  `,
})
export class CartDrawerComponent {
  open!: Signal<boolean>;
  items!: Signal<any[]>;
  constructor(public cart: CartService) {
    this.open = this.cart.isOpen;
    this.items = this.cart.items;
  }
  subtotal() {
    return this.cart.subtotal();
  }
  inc(id: string) {
    const item = this.items().find((i) => i.product.id === id);
    if (item) this.cart.updateQuantity(id, item.quantity + 1);
  }
  dec(id: string) {
    const item = this.items().find((i) => i.product.id === id);
    if (item) this.cart.updateQuantity(id, item.quantity - 1);
  }
}
