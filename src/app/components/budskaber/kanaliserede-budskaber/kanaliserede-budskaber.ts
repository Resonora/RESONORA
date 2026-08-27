import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-kanaliserede-budskaber',
  imports: [],
  templateUrl: './kanaliserede-budskaber.html',
  styleUrl: './kanaliserede-budskaber.scss',
})
export class KanaliseredeBudskaber {
  protected readonly currentTestimonial = signal(0);

  protected readonly testimonials = [
    {
      text: 'Ud fra min kontakt med Rebecka er der virkelig ting, jeg kan tage med mig videre. Ting jeg kan zoome ind på. Lære af. Samtidig med jeg måske fik lidt bekræftelse på nogle ting, som jeg måske inderst inde godt vidste - men som alligevel ramte spot on, så snart Rebecka påpegede det. Helt eminent og fantastisk oplevelse! Ikke sidste gang jeg gør brug af Rebecka og hendes evner! ❤️',
    },
    {
      text: 'Uden at kende noget til mig, og uden nogen former for information fra mig, rammer Rebecka plet på flere af de store emner, som fylder meget hos mig pt. Der blev formidlet kærlige budskaber og idéer til, hvordan jeg kan komme videre fra det sted jeg er lige nu. Rebecka har helt sikkert evner indenfor det clairvoyante.',
    },
    {
      text: 'Jeg stillede et spørgsmål til Rebecka ift mit arbejdsliv, og hendes svar ramte fuldstændig plet. Rebecka formåede at sætte ord på lige præcis det sted jeg står i livet, og bare forsikre mig om, at jeg går den rigtige vej. Derudover fik jeg en kærlig påmindelse, om tanker jeg tidligere har gået med, men som ligesom var trådt i baggrunden. Alt dette formidlet på den sødeste måde. Rebecka har virkelig min varmeste anbefaling. 🙏',
    },
    {
      text: 'Kæreste Rebecka, tusind tusind tak for din tilbagemelding. Du ramte spot on med det hele, og kunne faktisk mærke at jeg fik en knude i maven da jeg læste det, vidste godt der var noget der ikke var bearbejdet, men at det fylder så meget var jeg nok ikke lige klar over. Jeg vil helt klart begynde at arbejde med det her, og jeg bor omgivet af vand og elsker vandet, så det skal prøves. Endnu engang tusind tusind tak 🙏❤️',
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
