import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="border-t border-neutral-200 bg-neutral-50">
      <div class="container px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div class="font-serif text-xl font-bold mb-3">fashionx</div>
            <p class="text-neutral-600">Modern essentials crafted with care. Sign up for early access to drops.</p>
          </div>
          <div>
            <div class="font-semibold text-neutral-900">Shop</div>
            <ul class="mt-3 space-y-2 text-neutral-600">
              <li><a routerLink="/collections">New Arrivals</a></li>
              <li><a routerLink="/collections">Dresses</a></li>
              <li><a routerLink="/collections">Tops</a></li>
              <li><a routerLink="/collections">Bottoms</a></li>
            </ul>
          </div>
          <div>
            <div class="font-semibold text-neutral-900">Company</div>
            <ul class="mt-3 space-y-2 text-neutral-600">
              <li><a routerLink="/contact">Contact</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <div class="font-semibold text-neutral-900">Newsletter</div>
            <p class="mt-3 text-neutral-600">Subscribe for style updates and exclusive drops.</p>
            <form class="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" class="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900" />
              <button class="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="mt-10 border-t border-neutral-200 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <div class="mb-3 md:mb-0">© {{ year }} fashionx. All rights reserved.</div>
          <div class="flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent { year = new Date().getFullYear(); }
