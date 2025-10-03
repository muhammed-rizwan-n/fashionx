import { Component, Input, signal } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection-dropdown',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, CommonModule],
  template: `
    <div class="relative" (mouseenter)="open.set(true)" (mouseleave)="open.set(false)">
      <button class="px-3 py-2 hover:text-neutral-900 font-medium">Collections</button>
      <div
        class="absolute left-0 top-full mt-2 w-[520px] rounded-lg border border-neutral-200 bg-white p-4 shadow-2xl"
        *ngIf="open()"
      >
        <div class="grid grid-cols-3 gap-4">
          <a *ngFor="let c of collections" [routerLink]="['/collections']" [queryParams]="{ handle: c.handle }" class="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded">
            <div class="h-14 w-20 bg-cover bg-center rounded" [ngStyle]="{'background-image': 'url(' + (c.image || '') + ')'}"></div>
            <div>
              <div class="text-sm font-semibold">{{ c.title }}</div>
              <div class="text-xs text-neutral-500">Explore the edit</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class CollectionDropdownComponent {
  @Input({ required: true }) collections: { handle: string; title: string; image?: string }[] = [];
  open = signal(false);
}
