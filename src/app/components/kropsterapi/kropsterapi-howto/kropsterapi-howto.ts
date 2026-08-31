import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-kropsterapi-howto',
  imports: [],
  templateUrl: './kropsterapi-howto.html',
  styleUrl: './kropsterapi-howto.scss',
})
export class KropsterapiHowto {
  protected readonly currentTestimonial = signal(0);

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
    this.currentTestimonial.update((index) =>
      index === 0 ? this.testimonials.length - 1 : index - 1,
    );
  }

  protected showNext(): void {
    this.currentTestimonial.update((index) => (index + 1) % this.testimonials.length);
  }
}
