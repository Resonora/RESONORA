import { Component } from '@angular/core';
import { LydHeroStart } from '../../components/lyd/lyd-hero-start/lyd-hero-start';
import { Menubar } from "../../components/shared/menubar/menubar";
import { LydQa } from "../../components/lyd/lyd-qa/lyd-qa";
import { LydAboutme } from '../../components/lyd/lyd-aboutme/lyd-aboutme';
import { Footer } from "../../components/shared/footer/footer";
import { LydPictures } from '../../components/lyd/lyd-pictures/lyd-pictures';

@Component({
  selector: 'app-lyd',
  imports: [LydHeroStart, Menubar, LydQa, LydAboutme, LydPictures, Footer],
  templateUrl: './lyd.html',
  styleUrl: './lyd.scss',
})
export class Lyd {}
