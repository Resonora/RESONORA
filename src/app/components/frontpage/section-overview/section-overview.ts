import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-overview.html',
  styleUrl: './section-overview.scss',
})
export class SectionOverview {}
