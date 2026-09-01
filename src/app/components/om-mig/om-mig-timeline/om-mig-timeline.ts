import { Component } from '@angular/core';

@Component({
  selector: 'app-om-mig-timeline',
  imports: [],
  templateUrl: './om-mig-timeline.html',
  styleUrl: './om-mig-timeline.scss',
})
export class OmMigTimeline {
  protected readonly events = [
    {
      year: 'December 1990',
      title: 'Ny verdensborger',
      text: 'Her kom jeg til verden - så travl med at kigge på de besynderlige omgivelser, at jeg glemte at trække vejret i flere minutter. (Hjernen har det vidst ok i dag.)',
      image: 'Billede fra barndommen',
    },
    {
      year: '2000',
      title: 'Evnerne tager fart',
      text: 'Jeg var et åbent barn, og jeg kunne mærke, at der var mere mellem himmel og jord. Jeg begyndte at se og mærke ting, som andre ikke kunne, og det blev hurtigt en del af min hverdag. Så snart jeg lærte at stave, begyndte jeg at skrive om det - og jeg opdagede, hvordan musik kunne forstærke kontakten.',
      image: 'Billede kommer',
    },
    {
      year: 'Marts 2008',
      title: 'Mit første store tab',
      text: 'Min elskede far døde efter kort tids sygdom. Han var ellers den, jeg vendte alt om sjælen og Universet med. Men da han efter sin død begyndte at vandre rundt om min seng, blev det et stort nej tak herfra, og jeg lukkede ned for alle mine evner.',
      image: 'Billede kommer',
    },
    {
      year: 'Juni 2015',
      title: 'Bachelor i Radiografi',
      text: 'Jeg færdiggjorde min første videregående uddannelse som radiograf. Stor milepæl i mit liv, som jeg egentligt var stolt over - jeg elskede at gøre en forskel for andre. Men jeg blev også hurtigt rastløs, og kunne ikke finde ud af hvorfor.',
      image: 'Billede kommer',
    },
    {
      year: 'Maj 2018',
      title: 'Første belastningsreaktion',
      text: 'Her gik jeg ned med stress for første gang. Jeg skrabede bunden fuldstændigt og kunne ikke klare et sekund længere i sygehuskittel. Det var også her folk fra den anden side begyndte at banke på, og jeg måtte lave husrens og alliere mig med clairvoyante. Men jeg holdt mig lukket - jeg var ikke klar til at åbne op.',
      image: 'Billede kommer',
    },
    {
      year: 'August 2018',
      title: 'Nyt kapitel',
      text: 'Jeg vidste med alt i mig, at jeg ikke skulle være radiograf mere, så jeg tog et drastisk valg og startede ny uddannelse. Jeg håbede på, at lykken kunne findes i at udvikle IT-systemer til folk.',
      image: 'Billede kommer',
    },
    {
      year: '2018',
      title: 'Et vendepunkt',
      text: 'Et vigtigt stop på rejsen, hvor jeg begynder at lytte mere opmærksomt til mig selv.',
      image: 'Billede kommer',
    },
    {
      year: '2020',
      title: 'Ro i forandringen',
      text: 'Jeg lærer at give slip på det, der ikke længere passer, og at tage ét skridt ad gangen.',
      image: 'Billede kommer',
    },
    {
      year: '2022',
      title: 'Nye perspektiver',
      text: 'Nysgerrigheden får igen lov til at fylde, og jeg åbner mig for nye muligheder.',
      image: 'Billede kommer',
    },
    {
      year: '2024',
      title: 'Vejen indad',
      text: 'En tid med fordybelse, læring og mod til at vælge det, der føles rigtigt for mig.',
      image: 'Billede kommer',
    },
    {
      year: '2025',
      title: 'Resonora tager form',
      text: 'En drøm får retning og bliver til et rum med plads til ro, udvikling og nærvær.',
      image: 'Billede kommer',
    },
    {
      year: '2026',
      title: 'Jeg deler det videre',
      text: 'Med hjertet forrest begynder jeg at dele de redskaber og oplevelser, der har hjulpet mig.',
      image: 'Billede kommer',
    },
    {
      year: 'I dag',
      title: 'Stadig på vej',
      text: 'Rejsen fortsætter, og jeg glæder mig til alt det, der endnu skal udfolde sig.',
      image: 'Billede kommer',
    },
  ];
}
