import { NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menubar',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class Menubar {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly isOpen = signal(false);
  readonly isScrolled = signal(false);
  private isHome = false;
  private scrollY = 0;

  constructor() {
    this.isHome = this.router.url === '/' || this.router.url === '';
    this.updateScrolledState();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.isHome = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
        this.updateScrolledState();
      });
  }

  toggle(): void {
    this.isOpen.update((isOpen) => !isOpen);
  }

  close(): void {
    this.isOpen.set(false);
  }

  onWindowScroll(): void {
    this.scrollY = window.scrollY || window.pageYOffset || 0;
    this.updateScrolledState();
    if (this.isScrolled()) {
      this.close();
    }
  }

  private updateScrolledState(): void {
    this.isScrolled.set(!this.isHome || this.scrollY > 40);
  }
}
