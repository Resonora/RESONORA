import { CommonModule } from '@angular/common';
import { Component, computed, signal, OnDestroy } from '@angular/core';

interface FeedbackItem {
  text: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback implements OnDestroy {
  protected readonly feedbacks = signal<FeedbackItem[]>([
    {
      text: 'Tak for en magisk lydrejse. ✨ Fra start til slut følte jeg mig tryg og guidet, og lydene skabte et rum, hvor det lykkedes mig at give slip på hverdagens tanker og synke dybere ind i mig selv. Det var en oplevelse, der gav både ro, nærvær og ny energi. Jeg gik derfra med en følelse af indre balance og velvære, som blev hos mig længe efter. 🤌🌸 En lydrejse hos Rebecka får mine varmeste anbefalinger. 🩷',
      name: 'AMALIE',
      role: 'LYDREJSE DELTAGER',
    },
    {
      text: 'Tak for en god oplevelse med kropsterapi, det føles ganske fantastisk afslappende. Rebecka, det er nemt at føle sig tryg i dine hænder. Glæder mig allerede til næste gang ❤️',
      name: 'PIA',
      role: 'KROPSTERAPI KLIENT',
    },
    {
      text: 'Jeg var fuldstændig blown away over det budskab du fik igennem til mig. Det hele ramte så meget plet i hvad jeg står i, og hvad der foregår inde i mig. At du absolut intet kendskab havde til mig og min historie gjorde at jeg blev virkelig rørt over hvor præcis det var. Jeg er glad for at det lige netop var mig der var budskab til, og jeg tager det med mig og i min videre proces. Tusind tak 🙏🪷',
      name: 'HEIDI',
      role: 'CLAIRVOYANCE MODTAGER',
    },
    {
      text: 'Første gang jeg har prøvet kropsterapi og ikke sidste gang. Følte en indre ro og følte at kroppen blev løsnet op. Rebecka skabte et rum der gav tryghed, hvor der var plads til at give slip på følelserne. Det gav ro til krop og sjæl.',
      name: 'JANNIE',
      role: 'KROPSTERAPI KLIENT',
    },
    {
      text: 'Jeg havde ikke prøvet noget lignende før, men blev positivt overrasket over, hvor dybt lydende påvirkede mig. Oplevelsen rørte noget i mig og gav en særlig følelse af ro og nærvær. Rebecka skabte et trygt og behageligt rum, hvor jeg kunne slappe helt af. Det var en virkelig smuk oplevelse.',
      name: 'HELENA',
      role: 'LYDREJSE DELTAGER',
    },
    {
      text: 'Uden at kende noget til mig, og uden nogen former for information fra mig, rammer Rebecka plet på flere af de store emner, som fylder meget hos mig pt. Der blev formidlet kærlige budskaber og idéer til, hvordan jeg kan komme videre fra det sted jeg er lige nu. Rebecka har helt sikkert evner indenfor det clavoyante.',
      name: 'MAIKEN',
      role: 'CLAIRVOYANCE MODTAGER',
    }
  ]);

  protected readonly currentIndex = signal(0);
  protected readonly animationDirection = signal<'left' | 'right'>('right');
  protected readonly isAnimating = signal(false);

  private intervalId?: number;
  private readonly autoSlideDelay = 8000;

  protected readonly selectedFeedback = computed(
    () => this.feedbacks()[this.currentIndex()]
  );

  constructor() {
    this.startAutoSlide();
  }

  private startAutoSlide() {
    this.stopAutoSlide();
    this.intervalId = window.setInterval(() => this.next(false), this.autoSlideDelay);
  }

  private stopAutoSlide() {
    if (this.intervalId !== undefined) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  protected resetAutoSlide() {
    this.startAutoSlide();
  }

  protected prev(userInteraction = true) {
    const length = this.feedbacks().length;
    const nextIndex = (this.currentIndex() - 1 + length) % length;
    this.changeSlide('left', nextIndex, userInteraction);
  }

  protected next(userInteraction = true) {
    const length = this.feedbacks().length;
    const nextIndex = (this.currentIndex() + 1) % length;
    this.changeSlide('right', nextIndex, userInteraction);
  }

  protected goTo(index: number) {
    if (index === this.currentIndex()) {
      return;
    }

    const direction = index > this.currentIndex() ? 'right' : 'left';
    this.changeSlide(direction, index, true);
  }

  private changeSlide(direction: 'left' | 'right', nextIndex: number, userInteraction: boolean) {
    if (this.isAnimating()) {
      return;
    }

    this.animationDirection.set(direction);
    this.isAnimating.set(true);

    if (userInteraction) {
      this.resetAutoSlide();
    }

    window.setTimeout(() => {
      this.currentIndex.set(nextIndex);
      this.isAnimating.set(false);
    }, 320);
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}

