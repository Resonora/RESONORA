import { Component, inject } from '@angular/core';
import { KropsterapiHeroStart } from "../../components/kropsterapi/kropsterapi-hero-start/kropsterapi-hero-start";
import { Menubar } from "../../components/shared/menubar/menubar";
import { Footer } from "../../components/shared/footer/footer";
import { KropsterapiHowto } from "../../components/kropsterapi/kropsterapi-howto/kropsterapi-howto";
import { KropsterapiAboutme } from "../../components/kropsterapi/kropsterapi-aboutme/kropsterapi-aboutme";
import { KropsterapiThoughts } from "../../components/kropsterapi/kropsterapi-thoughts/kropsterapi-thoughts";
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-kropsterapi',
  imports: [KropsterapiHeroStart, Menubar, Footer, KropsterapiThoughts, KropsterapiHowto, KropsterapiAboutme],
  templateUrl: './kropsterapi.html',
  styleUrl: './kropsterapi.scss',
})
export class Kropsterapi {
  constructor() {
    inject(Seo).update({
      title: 'Kropsterapi',
      description:
        'Kropsterapi hos Rebecka hjælper dig med at slippe spændinger og finde ro i kroppen gennem blide tryk, pulserende massage og samtale.',
      path: '/kropsterapi',
    });
  }
}
