import { Component } from '@angular/core';
import { Menubar } from "../../components/shared/menubar/menubar";
import { IntuitivHeroStart } from "../../components/intuitivvejledning/intuitiv-hero-start/intuitiv-hero-start";

@Component({
  selector: 'app-intuitivvejledning',
  imports: [Menubar, IntuitivHeroStart],
  templateUrl: './intuitivvejledning.html',
  styleUrl: './intuitivvejledning.scss',
})
export class Intuitivvejledning {}
