import { Component } from '@angular/core';
import { HeroStart } from "../../components/frontpage/hero-start/hero-start";
import { SectionOverview } from "../../components/frontpage/section-overview/section-overview";
import { SectionAbout } from "../../components/frontpage/section-about/section-about";
import { Footer } from '../../components/shared/footer/footer';
import { Menubar } from "../../components/shared/menubar/menubar";
import { Feedback } from "../../components/frontpage/feedback/feedback";

@Component({
  selector: 'app-start-her',
  standalone: true,
  imports: [HeroStart, SectionOverview, SectionAbout, Footer, Menubar, Feedback],
  templateUrl: './start-her.html',
  styleUrl: './start-her.scss',
})
export class StartHer {}
