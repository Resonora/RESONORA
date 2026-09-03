import { Component, inject } from '@angular/core';
import { ReikiHeroStart } from "../../components/reiki/reiki-hero-start/reiki-hero-start";
import { ReikiAbout } from '../../components/reiki/reiki-about/reiki-about';
import { Menubar } from '../../components/shared/menubar/menubar';
import { ReikiOverview } from '../../components/reiki/reiki-overview/reiki-overview';
import { Footer } from "../../components/shared/footer/footer";
import { ReikiAboutme } from '../../components/reiki/reiki-aboutme/reiki-aboutme';
import { ReikiThoughts } from '../../components/reiki/reiki-thoughts/reiki-thoughts';
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-reiki',
  imports: [ReikiHeroStart, ReikiAbout, Menubar, ReikiOverview, ReikiThoughts, ReikiAboutme, Footer],
  templateUrl: './reiki.html',
  styleUrl: './reiki.scss',
})
export class Reiki {
  constructor() {
    inject(Seo).update({
      title: 'Reiki healing',
      description:
        'Reiki healing hos Rebecka fremmer grounding og energibalance. Book en session og oplev healende ro for krop og sind.',
      path: '/reiki',
    });
  }
}
