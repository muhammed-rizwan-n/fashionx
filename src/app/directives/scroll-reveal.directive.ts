import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";

@Directive({
  selector: "[appScrollReveal]",
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private obs?: IntersectionObserver;
  @HostBinding("class.show") isShown = false;
  @Input("appScrollReveal") offset: any = 0.1;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const threshold =
      typeof this.offset === "string"
        ? Number(this.offset) || 0.1
        : (this.offset as number);
    this.obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add("show");
            this.obs?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold },
    );
    this.el.nativeElement.classList.add("reveal");
    this.obs.observe(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.obs?.disconnect();
  }
}
