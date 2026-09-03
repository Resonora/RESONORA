import { Component, inject } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { Menubar } from '../../components/shared/menubar/menubar';
import { OmMigHeroStart } from '../../components/om-mig/om-mig-hero-start/om-mig-hero-start';
import { Seo } from '../../core/seo';

@Component({
  selector: 'app-om-mig',
  imports: [OmMigHeroStart, Menubar, Footer],
  templateUrl: './om-mig.html',
  styleUrl: './om-mig.scss',
})
export class OmMig {
  constructor() {
    inject(Seo).update({
      title: 'Om mig',
      description:
        'Mød Rebecka bag Resonora og læs om rejsen bag lydrejser, reiki, kropsterapi og personlige budskaber.',
      path: '/rebecka',
    });
  }
}
