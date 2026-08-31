import { Component } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { Menubar } from '../../components/shared/menubar/menubar';
import { OmMigHeroStart } from '../../components/om-mig/om-mig-hero-start/om-mig-hero-start';
import { OmMigTimeline } from '../../components/om-mig/om-mig-timeline/om-mig-timeline';

@Component({
  selector: 'app-om-mig',
  imports: [OmMigHeroStart, Menubar, OmMigTimeline, Footer],
  templateUrl: './om-mig.html',
  styleUrl: './om-mig.scss',
})
export class OmMig {}
