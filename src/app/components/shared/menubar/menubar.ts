import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss',
})
export class Menubar {
  private readonly router = inject(Router);
  bars = 'fa-solid fa-bars';
  isOpen = false;
  isScrolled = false;
  isHome = false;
  private scrollY = 0;

  constructor() {
    this.isHome = this.router.url === '/' || this.router.url === '';
    this.updateScrolledState();

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isHome = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '';
        this.updateScrolledState();
      });
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollY = window.scrollY || window.pageYOffset || 0;
    this.updateScrolledState();
    if (this.isScrolled) this.isOpen = false; // close mobile menu when scrolling
  }

  private updateScrolledState(): void {
    this.isScrolled = !this.isHome || this.scrollY > 40;
  }
}
