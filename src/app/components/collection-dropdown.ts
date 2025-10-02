import { Component, Input, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection-dropdown',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
    <div class="relative" (mouseenter)="open.set(true)" (mouseleave)="open.set(false)">
      <button class="px-3 py-2 hover:text-neutral-900">Collections</button>
      <div
        class="absolute left-0 top-full mt-2 w-72 rounded-lg border border-neutral-200 bg-white p-3 shadow-xl"
        *ngIf="open()"
      >
        <div class="grid grid-cols-2 gap-2">
          <a
            *ngFor="let c of collections"
            [routerLink]="['/collections']"
            [queryParams]="{ handle: c.handle }"
            class="block rounded-md px-3 py-2 hover:bg-neutral-50"
          >
            <div class="text-sm font-medium text-neutral-900">{{ c.title }}</div>
            <div class="text-xs text-neutral-500">Explore {{ c.title.toLowerCase() }}</div>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class CollectionDropdownComponent {
  @Input({ required: true }) collections: { handle: string; title: string }[] = [];
  open = signal(false);
}
