import { Component, inject } from '@angular/core';
import { HeroStart } from "../../components/frontpage/hero-start/hero-start";
import { SectionOverview } from "../../components/frontpage/section-overview/section-overview";
import { SectionAbout } from "../../components/frontpage/section-about/section-about";
import { Footer } from '../../components/shared/footer/footer';
import { Menubar } from "../../components/shared/menubar/menubar";
import { Lastwords } from "../../components/frontpage/lastwords/lastwords";
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-start-her',
  standalone: true,
  imports: [HeroStart, SectionOverview, SectionAbout, Footer, Menubar, Lastwords],
  templateUrl: './start-her.html',
  styleUrl: './start-her.scss',
})
export class StartHer {
  constructor() {
    inject(Seo).update({
      title: 'Rum for indre resonans',
      description:
        'Resonora er Rebeckas rum for lydrejser, reiki healing, kropsterapi og personlige budskaber. Find ro, nærvær og indre balance.',
      path: '/',
    });
  }
}
