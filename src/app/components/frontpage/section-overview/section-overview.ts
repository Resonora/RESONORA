import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Feedback } from '../feedback/feedback';

@Component({
  selector: 'app-section-overview',
  standalone: true,
  imports: [RouterLink, Feedback],
  templateUrl: './section-overview.html',
  styleUrls: ['./section-overview.scss'],
})
export class SectionOverview {}
