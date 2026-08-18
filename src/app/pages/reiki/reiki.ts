import { Component } from '@angular/core';
import { ReikiHeroStart } from "../../components/reiki/reiki-hero-start/reiki-hero-start";
import { Menubar } from '../../components/shared/menubar/menubar';

@Component({
  selector: 'app-reiki',
  imports: [ReikiHeroStart, Menubar],
  templateUrl: './reiki.html',
  styleUrl: './reiki.scss',
})
export class Reiki {}
