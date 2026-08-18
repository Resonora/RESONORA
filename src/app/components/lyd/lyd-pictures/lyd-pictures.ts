import { Component, signal, effect } from '@angular/core';

interface Picture {
  id: number;
  title: string;
  thumbnail: string;
  full: string;
}

@Component({
  selector: 'app-lyd-pictures',
  imports: [],
  templateUrl: './lyd-pictures.html',
  styleUrl: './lyd-pictures.scss',
})
export class LydPictures {
  pictures: Picture[] = [
    {
      id: 1,
      title: 'Lydrejse 1',
      thumbnail: '/lydmini1.png',
      full: '/lyd1.png',
    },
    {
      id: 2,
      title: 'Lydrejse 2',
      thumbnail: '/lydmini2.png',
      full: '/lyd2.png',
    },
    {
      id: 3,
      title: 'Lydrejse 3',
      thumbnail: '/lydmini3.png',
      full: '/lyd3.png',
    },
    {
      id: 4,
      title: 'Lydrejse 4',
      thumbnail: '/lydmini4.png',
      full: '/lyd4.png',
    },
    {
      id: 5,
      title: 'Lydrejse 5',
      thumbnail: '/lydmini5.png',
      full: '/lyd5.png',
    },
    {
      id: 6,
      title: 'Lydrejse 6',
      thumbnail: '/lydmini6.png',
      full: '/lyd6.png',
    }
  ];

  selectedImageIndex = signal<number | null>(null);

  constructor() {
    effect(() => {
      if (this.selectedImageIndex() === null) {
        return;
      }

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          this.closeModal();
        } else if (event.key === 'ArrowLeft') {
          this.previousImage();
        } else if (event.key === 'ArrowRight') {
          this.nextImage();
        }
      };

      window.addEventListener('keydown', handleKeydown);

      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    });
  }

  openImage(index: number): void {
    this.selectedImageIndex.set(index);
  }

  closeModal(): void {
    this.selectedImageIndex.set(null);
  }

  nextImage(): void {
    const current = this.selectedImageIndex();
    if (current !== null) {
      const next = (current + 1) % this.pictures.length;
      this.selectedImageIndex.set(next);
    }
  }

  previousImage(): void {
    const current = this.selectedImageIndex();
    if (current !== null) {
      const prev = current === 0 ? this.pictures.length - 1 : current - 1;
      this.selectedImageIndex.set(prev);
    }
  }
}
