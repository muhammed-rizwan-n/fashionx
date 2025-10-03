import { Component, EventEmitter, Output, signal } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { products } from '../data/mock-data';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, CommonModule, FormsModule],
  template: `
    <div class="fixed inset-0 z-50 bg-black/50" (click)="close.emit()"></div>
    <div class="fixed left-1/2 top-10 z-50 w-[92vw] max-w-3xl -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-4 shadow-2xl">
      <input
        type="text"
        class="w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
        placeholder="Search products..."
        [(ngModel)]="q"
      />
      <div class="mt-3 max-h-80 overflow-auto divide-y divide-neutral-100">
        <a
          *ngFor="let p of filtered"
          [routerLink]="['/product', p.handle]"
          class="flex items-center gap-3 px-2 py-3 hover:bg-neutral-50"
          (click)="close.emit()"
        >
          <img [src]="p.images[0]" class="h-12 w-12 rounded object-cover" alt="{{ p.title }}" />
          <div class="text-sm">
            <div class="font-medium text-neutral-900">{{ p.title }}</div>
            <div class="text-neutral-500">₹{{ p.price | number:'1.0-0' }}</div>
          </div>
        </a>
      </div>
    </div>
  `,
})
export class SearchBarComponent {
  @Output() close = new EventEmitter<void>();
  q = '';

  get filtered() {
    const term = this.q.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) => p.title.toLowerCase().includes(term) || (p.tags || []).some((t) => t.includes(term)));
  }
}
