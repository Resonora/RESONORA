import { Component } from '@angular/core';
import { Menubar } from "../../components/shared/menubar/menubar";
import { Footer } from "../../components/shared/footer/footer";
import { FormularLayout } from "../../components/formular-layout/formular-layout";

@Component({
  selector: 'app-formular',
  imports: [Menubar, Footer, FormularLayout],
  templateUrl: './formular.html',
  styleUrl: './formular.scss',
})
export class Formular {}
