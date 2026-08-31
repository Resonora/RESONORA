import { Component } from '@angular/core';

@Component({
  selector: 'app-om-mig-timeline',
  imports: [],
  templateUrl: './om-mig-timeline.html',
  styleUrl: './om-mig-timeline.scss',
})
export class OmMigTimeline {
  protected readonly events = [
    { year: '1990', title: 'Et nyt kapitel begynder', text: 'En lille begyndelse og de første spor af den vej, der senere skulle blive min.', image: 'Billede fra barndommen' },
    { year: '1995', title: 'Nysgerrighed på verden', text: 'En tid med fantasi, nærvær og en voksende lyst til at forstå menneskene omkring mig.', image: 'Billede kommer' },
    { year: '2001', title: 'De første store drømme', text: 'Jeg begynder at finde ord for det, der føles vigtigt, og for den jeg gerne vil være.', image: 'Billede kommer' },
    { year: '2007', title: 'På egne ben', text: 'Nye rammer, nye mennesker og erfaringer, som bliver en del af mit fundament.', image: 'Billede kommer' },
    { year: '2011', title: 'Livet tager form', text: 'En periode med udvikling, ansvar og mange små valg, der peger mig videre.', image: 'Billede kommer' },
    { year: '2015', title: 'Mere plads til mig', text: 'Jeg bliver klogere på mine grænser og på, hvad der giver mig energi i hverdagen.', image: 'Billede kommer' },
    { year: '2018', title: 'Et vendepunkt', text: 'Et vigtigt stop på rejsen, hvor jeg begynder at lytte mere opmærksomt til mig selv.', image: 'Billede kommer' },
    { year: '2020', title: 'Ro i forandringen', text: 'Jeg lærer at give slip på det, der ikke længere passer, og at tage ét skridt ad gangen.', image: 'Billede kommer' },
    { year: '2022', title: 'Nye perspektiver', text: 'Nysgerrigheden får igen lov til at fylde, og jeg åbner mig for nye muligheder.', image: 'Billede kommer' },
    { year: '2024', title: 'Vejen indad', text: 'En tid med fordybelse, læring og mod til at vælge det, der føles rigtigt for mig.', image: 'Billede kommer' },
    { year: '2025', title: 'Resonora tager form', text: 'En drøm får retning og bliver til et rum med plads til ro, udvikling og nærvær.', image: 'Billede kommer' },
    { year: '2026', title: 'Jeg deler det videre', text: 'Med hjertet forrest begynder jeg at dele de redskaber og oplevelser, der har hjulpet mig.', image: 'Billede kommer' },
    { year: 'I dag', title: 'Stadig på vej', text: 'Rejsen fortsætter, og jeg glæder mig til alt det, der endnu skal udfolde sig.', image: 'Billede kommer' },
  ];
}
