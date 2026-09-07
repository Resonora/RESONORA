import { Component, inject } from '@angular/core';
import { LydHeroStart } from '../../components/lyd/lyd-hero-start/lyd-hero-start';
import { Menubar } from "../../components/shared/menubar/menubar";
import { LydQa } from "../../components/lyd/lyd-qa/lyd-qa";
import { LydAboutme } from '../../components/lyd/lyd-aboutme/lyd-aboutme';
import { Footer } from "../../components/shared/footer/footer";
import { LydAbout } from '../../components/lyd/lyd-about/lyd-about';
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-lyd',
  imports: [LydHeroStart, Menubar, LydQa, LydAboutme, LydAbout, Footer],
  templateUrl: './lyd.html',
  styleUrl: './lyd.scss',
})
export class Lyd {
  constructor() {
    inject(Seo).update({
      title: 'Lydrejser',
      description:
        'Oplev en lydrejse hos Rebecka og lad klange og vibrationer guide dig til dyb afslapning, indre ro og nærvær.',
      path: '/lyd',
      image: 'https://resonora.dk/lyd-hero-background.webp',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Lydrejse',
          name: 'Lydrejser hos Resonora',
          description:
            'Oplev en lydrejse hos Rebecka og lad klange og vibrationer guide dig til dyb afslapning, indre ro og nærvær.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Resonora',
            url: 'https://resonora.dk',
          },
          areaServed: 'Odense',
          url: 'https://resonora.dk/lyd',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Hvad er forskellen på en lydrejse og lydhealing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ordene bruges ofte som synonymer, om end lydhealing ind i mellem kan referere til et mere dybdegående, terapeutisk arbejde. Det kaldes primært en lydrejse, fordi ordet beskriver det, der typisk sker i rummet: du ligger afslappet, lytter og lader lyden føre dig et andet sted hen.',
              },
            },
            {
              '@type': 'Question',
              name: 'Kan jeg høre afslappende musik med hovedtelefoner og opnå samme følelse af ro?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Afslappende musik i høretelefoner kan absolut give ro, men en lydrejse opleves anderledes. Lydene opstår fysisk i rummet omkring dig, og især gong og syngeskåle skaber vibrationer, som flere også oplever kropsligt.',
              },
            },
            {
              '@type': 'Question',
              name: 'Hvorfor påvirker lydene mig følelsesmæssigt?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Lyd kan vække meget i os. En bestemt tone kan skabe ro hos ét menneske og røre noget følelsesmæssigt hos et andet. Under en lydrejse ligger du samtidig stille uden de sædvanlige distraktioner, og det kan gøre det lettere at lægge mærke til både kroppen, tankerne og følelserne.',
              },
            },
            {
              '@type': 'Question',
              name: 'Er en lydrejse for alle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'De fleste kan deltage i en lydrejse, men lyd og vibrationer kan i nogle tilfælde opleves intenst. Ved lydfølsomhed eller usikkerhed om en helbredstilstand anbefales det at kontakte Rebecka inden booking, eller spørge sin behandler eller læge først.',
              },
            },
            {
              '@type': 'Question',
              name: 'Hvordan foregår en 1:1-lydrejse?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'En 1:1-lydrejse foregår i hjemmeklinikken i Odense V. Sessionen starter med en kort samtale, hvorefter Rebecka guider dig ned i kroppen og arbejder intuitivt med bl.a. gong, syngeskåle, krystalskåle og handpan. En session varer ca. 60 minutter.',
              },
            },
          ],
        },
      ],
    });
  }
}
