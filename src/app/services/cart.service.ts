import { Injectable, Signal, computed, signal } from '@angular/core';
import { Product } from '../data/types';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _open = signal(false);
  readonly isOpen: Signal<boolean> = this._open.asReadonly();

  private readonly _items = signal<CartItem[]>([]);
  readonly items: Signal<CartItem[]> = this._items.asReadonly();

  readonly count = computed(() => this._items().reduce((sum, i) => sum + i.quantity, 0));
  readonly subtotal = computed(() => this._items().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  toggle(open?: boolean) {
    if (typeof open === 'boolean') this._open.set(open);
    else this._open.update((v) => !v);
  }

  add(product: Product, qty: number = 1) {
    const list = [...this._items()];
    const idx = list.findIndex((i) => i.product.id === product.id);
    if (idx >= 0) list[idx] = { ...list[idx], quantity: list[idx].quantity + qty };
    else list.push({ product, quantity: qty });
    this._items.set(list);
    this._open.set(true);
  }

  remove(productId: string) {
    this._items.set(this._items().filter((i) => i.product.id !== productId));
  }

  updateQuantity(productId: string, qty: number) {
    this._items.set(
      this._items().map((i) => (i.product.id === productId ? { ...i, quantity: Math.max(1, qty) } : i))
    );
  }

  clear() {
    this._items.set([]);
  }
}
