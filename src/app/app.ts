import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";
import { CartDrawerComponent } from "./components/cart-drawer";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartDrawerComponent,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("fusion-angular-tailwind-starter");
}
