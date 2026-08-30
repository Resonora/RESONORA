import { Component } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { Menubar } from '../../components/shared/menubar/menubar';
import { OmMigHeroStart } from '../../components/om-mig/om-mig-hero-start/om-mig-hero-start';

@Component({
  selector: 'app-om-mig',
  imports: [OmMigHeroStart, Menubar, Footer],
  templateUrl: './om-mig.html',
  styleUrl: './om-mig.scss',
})
export class OmMig {}
