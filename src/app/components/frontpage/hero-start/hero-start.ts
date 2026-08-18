import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-start',
  standalone: true,
  imports: [],
  templateUrl: './hero-start.html',
  styleUrl: './hero-start.scss',
})
export class HeroStart implements AfterViewInit {
  private ticking = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const hero = this.el.nativeElement.querySelector('.hero') || document.querySelector('.hero');
    if (hero) {
      hero.style.setProperty('--hero-sym', '0px');
      hero.style.setProperty('--hero-divider', '1px');
      hero.style.setProperty('--hero-cta', '0px');
      hero.style.setProperty('--hero-bg', '0px');
      hero.style.setProperty('--hero-title', '0px');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sc = window.scrollY || window.pageYOffset || 0;
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const hero = this.el.nativeElement.querySelector('.hero') || document.querySelector('.hero');
      if (hero) {
        // parallax offsets for layered motion
        hero.style.setProperty('--hero-sym', `${-sc * 0.04}px`);
        hero.style.setProperty('--hero-divider', `${-sc * 0.02}px`);
        hero.style.setProperty('--hero-cta', `${sc * 0.02}px`);
        // background moves slower (small positive), title moves slightly opposite for depth
        hero.style.setProperty('--hero-bg', `${sc * 0.02}px`);
        hero.style.setProperty('--hero-title', `${-sc * 0.03}px`);
      }
      this.ticking = false;
    });
  }
}
