import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-placeholder",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-24 text-center">
      <h2 class="text-2xl font-semibold">Coming soon</h2>
      <p class="mt-4 text-neutral-600">
        This page is a placeholder. Ask me to fill it with real content.
      </p>
    </div>
  `,
})
export class PlaceholderPage {}
