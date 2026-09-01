import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-reiki-overview',
  imports: [],
  templateUrl: './reiki-overview.html',
  styleUrl: './reiki-overview.scss',
})
export class ReikiOverview {
  protected readonly currentTestimonial = signal(0);
  protected readonly isAnimating = signal(false);
  private readonly expandedTestimonials = signal<ReadonlySet<number>>(new Set());

  // Placeholder testimonial; add more entries here as they become available.
  protected readonly testimonials = [
    {
      text: 'Rebecka formår at kombinere en høj grad af professionalisme med en helt særlig varme og nærvær. Fra første øjeblik føler man sig mødt, set og taget alvorligt. Hun skaber et rum, hvor det føles trygt at give slip og bare være i det, der opstår. Noget af det, jeg især har været glad for, er hendes måde at formidle på. Hun er oplysende og god til at sætte ord på det, hun oplever og arbejder med undervejs. Jeg oplevede at der var plads til mine egne oplevelser, refleksioner og det, der gav mening for mig. Jeg oplevede en virkelig god effekt efter behandlingerne. Ikke kun lige bagefter, men også i dagene efter, hvor jeg kunne mærke, at behandlingen fortsat arbejdede i mig. Jeg oplevede mere ro, en anden lethed og en følelse af, at noget havde flyttet sig og fået lov til at falde mere på plads. For mig har det været mere end blot en behagelig behandling. Det har været en oplevelse af at blive mødt som et helt menneske, med både krop, tanker, følelser og alt det, der kan være svært helt at sætte ord på. En utrolig varm, professionel og kompetent behandler, som jeg uden tvivl ville lægge mig i hænderne på igen. ❤️',
    },
  ];

  protected readonly selectedTestimonial = computed(
    () => this.testimonials[this.currentTestimonial()],
  );

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

  protected isExpanded(index: number): boolean {
    return this.expandedTestimonials().has(index);
  }

  protected toggleExpanded(index: number): void {
    this.expandedTestimonials.update((expanded) => {
      const next = new Set(expanded);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }

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
