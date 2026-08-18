import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lyd-qa',
  imports: [],
  templateUrl: './lyd-qa.html',
  styleUrl: './lyd-qa.scss',
})
export class LydQa {
  expandedIndex = signal<number | null>(null);

  toggleItem(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}
