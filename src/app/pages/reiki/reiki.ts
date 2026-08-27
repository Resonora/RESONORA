import { Component } from '@angular/core';
import { ReikiHeroStart } from "../../components/reiki/reiki-hero-start/reiki-hero-start";
import { ReikiAbout } from '../../components/reiki/reiki-about/reiki-about';
import { Menubar } from '../../components/shared/menubar/menubar';
import { ReikiOverview } from '../../components/reiki/reiki-overview/reiki-overview';

@Component({
  selector: 'app-reiki',
  imports: [ReikiHeroStart, ReikiAbout, Menubar, ReikiOverview],
  templateUrl: './reiki.html',
  styleUrl: './reiki.scss',
})
export class Reiki {}
