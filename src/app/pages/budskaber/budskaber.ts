import { Component } from '@angular/core';
import { Menubar } from '../../components/shared/menubar/menubar';
import { BudskaberHeroStart } from '../../components/budskaber/budskaber-hero-start/budskaber-hero-start';
import { Footer } from '../../components/shared/footer/footer';
import { KanaliseredeBudskaber } from '../../components/budskaber/kanaliserede-budskaber/kanaliserede-budskaber';
import { BudskaberOverview } from '../../components/budskaber/budskaber-overview/budskaber-overview';
import { BudskaberAfdoedekontakt } from '../../components/budskaber/budskaber-afdoedekontakt/budskaber-afdoedekontakt';
import { BudskaberQa } from '../../components/budskaber/budskaber-qa/budskaber-qa';

@Component({
  selector: 'app-budskaber',
  imports: [Menubar, BudskaberHeroStart, BudskaberOverview, KanaliseredeBudskaber, BudskaberAfdoedekontakt, BudskaberQa, Footer],
  templateUrl: './budskaber.html',
  styleUrls: ['./budskaber.scss'],
})
export class Budskaber {}
