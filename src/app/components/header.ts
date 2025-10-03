import { Component, Signal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CollectionDropdownComponent } from './collection-dropdown';
import { collections } from '../data/mock-data';
import { SearchBarComponent } from './search-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIf, CollectionDropdownComponent, SearchBarComponent],
  template: `
    <div class="bg-neutral-900 text-white text-xs text-center py-2">Free shipping on orders over ₹999</div>
    <header class="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div class="container px-4">
        <div class="flex h-20 items-center justify-between">
          <nav class="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <a routerLink="/" class="px-3 py-2 hover:text-neutral-900">Home</a>
            <app-collection-dropdown [collections]="navCollections"></app-collection-dropdown>
            <a routerLink="/collections" class="px-3 py-2 hover:text-neutral-900">Shop All</a>
            <a routerLink="/contact" class="px-3 py-2 hover:text-neutral-900">Contact</a>
          </nav>

          <a routerLink="/" class="text-2xl font-serif tracking-wide text-neutral-900">fashionx</a>

          <div class="flex items-center gap-3">
            <button aria-label="Search" class="p-2 hover:bg-neutral-100 rounded-md" (click)="toggleSearch()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            </button>
            <a routerLink="/signin" class="hidden md:inline text-sm text-neutral-700 hover:text-neutral-900">Sign in</a>
            <button aria-label="Cart" class="relative p-2 hover:bg-neutral-100 rounded-md" (click)="cart.toggle(true)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></svg>
              <span *ngIf="count() > 0" class="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-medium text-white">{{ count() }}</span>
            </button>
            <button class="md:hidden p-2 hover:bg-neutral-100 rounded-md" (click)="mobileOpen.set(!mobileOpen())">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        <div *ngIf="mobileOpen()" class="md:hidden border-t border-neutral-200 py-3 space-y-1">
          <a routerLink="/" class="block px-3 py-2 rounded hover:bg-neutral-50">Home</a>
          <a routerLink="/collections" class="block px-3 py-2 rounded hover:bg-neutral-50">Shop All</a>
          <a routerLink="/contact" class="block px-3 py-2 rounded hover:bg-neutral-50">Contact</a>
          <a routerLink="/signin" class="block px-3 py-2 rounded hover:bg-neutral-50">Sign in</a>
        </div>
      </div>
    </header>
    <app-search-bar *ngIf="searchOpen()" (close)="toggleSearch(false)"></app-search-bar>
  `,
})
export class HeaderComponent {
  mobileOpen = signal(false);
  searchOpen = signal(false);
  count!: Signal<number>;
  navCollections = collections.map((c) => ({ handle: c.handle, title: c.title }));

  constructor(public cart: CartService) { this.count = this.cart.count; }

  toggleSearch(force?: boolean) {
    if (typeof force === 'boolean') this.searchOpen.set(force);
    else this.searchOpen.update((v) => !v);
  }
}
