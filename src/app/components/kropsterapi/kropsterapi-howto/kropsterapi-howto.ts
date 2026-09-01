import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-kropsterapi-howto',
  imports: [],
  templateUrl: './kropsterapi-howto.html',
  styleUrl: './kropsterapi-howto.scss',
})
export class KropsterapiHowto {
  protected readonly currentTestimonial = signal(0);
  protected readonly isAnimating = signal(false);

  protected readonly testimonials = [
    {
      text: 'Tak for en god oplevelse med kropsterapi, det føles ganske fantastisk afslappende. Rebecka, det er nemt at føle sig tryg i dine hænder. Glæder mig allerede til næste gang ❤️',
      author: '- Pia',
    },
    {
      text: 'Første gang jeg har prøvet kropsterapi og ikke sidste gang. Følte en indre ro og følte at kroppen blev løsnet op. Rebecka skabte et rum der gav tryghed, hvor der var plads til at give slip på følelserne. Det gav ro til krop og sjæl.',
      author: '- Jannie',
    },
    {
      text: 'Undervejs i min første kropsterapibehandling blev jeg overrasket over hvordan følelser blev vækket til overfladen. Rebecka greb mig opmærksomt og omsorgsfuldt og førte mig igennem en på alle måder god oplevelse og behandling.',
      author: '- Jesper',
    },
  ];

  protected showPrevious(): void {
    const currentIndex = this.currentTestimonial();
    const nextIndex = currentIndex === 0 ? this.testimonials.length - 1 : currentIndex - 1;
    this.changeTestimonial(nextIndex);
  }

  protected showNext(): void {
    this.changeTestimonial((this.currentTestimonial() + 1) % this.testimonials.length);
  }

  protected showTestimonial(index: number): void {
    if (index === this.currentTestimonial()) {
      return;
    }

    this.changeTestimonial(index);
  }

  protected readonly selectedTestimonial = computed(
    () => this.testimonials[this.currentTestimonial()],
  );

  private changeTestimonial(nextIndex: number): void {
    if (this.isAnimating()) {
      return;
    }

    this.isAnimating.set(true);

    window.setTimeout(() => {
      this.currentTestimonial.set(nextIndex);
      this.isAnimating.set(false);
    }, 180);
  }
}
