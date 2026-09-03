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
    });
  }
}
