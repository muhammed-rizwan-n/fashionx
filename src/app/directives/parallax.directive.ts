import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  @Input('appParallax') ratio = 0.3;

  constructor(private el: ElementRef<HTMLElement>, private rd: Renderer2) {}

  @HostListener('window:scroll')
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const y = rect.top * this.ratio;
    this.rd.setStyle(this.el.nativeElement, 'transform', `translate3d(0, ${y}px, 0)`);
    this.rd.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }
}
