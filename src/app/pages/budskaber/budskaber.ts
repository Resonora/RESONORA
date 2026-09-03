import { Component, inject } from '@angular/core';
import { Menubar } from '../../components/shared/menubar/menubar';
import { BudskaberHeroStart } from '../../components/budskaber/budskaber-hero-start/budskaber-hero-start';
import { BudskaberThoughts } from '../../components/budskaber/budskaber-thoughts/budskaber-thoughts';
import { Footer } from '../../components/shared/footer/footer';
import { KanaliseredeBudskaber } from '../../components/budskaber/kanaliserede-budskaber/kanaliserede-budskaber';
import { BudskaberAboutme } from '../../components/budskaber/budskaber-aboutme/budskaber-aboutme';
import { BudskaberQa } from '../../components/budskaber/budskaber-qa/budskaber-qa';
import { Seo } from '../../core/seo';


@Component({
  selector: 'app-budskaber',
  imports: [Menubar, BudskaberHeroStart, BudskaberThoughts, KanaliseredeBudskaber, BudskaberQa, BudskaberAboutme, Footer],
  templateUrl: './budskaber.html',
  styleUrls: ['./budskaber.scss'],
})
export class Budskaber {
  constructor() {
    inject(Seo).update({
      title: 'Personlige budskaber',
      description:
        'Modtag personlige budskaber hos Rebecka, der giver perspektiv og indsigt på din vej videre i livet.',
      path: '/budskaber',
    });
  }
}
