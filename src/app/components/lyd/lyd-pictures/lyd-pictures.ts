import { Component, OnInit, signal } from '@angular/core';
import { supabase } from '../../../core/supabase';

interface Picture {
  id: number;
  title: string;
  thumbnail: string;
}

interface EventRow {
  id: number;
  city: string;
  event_date: string;
  start_time: string;
  end_time: string;
  price: number;
  published: boolean;
  signup_url: string;
  sold_out: boolean;
  title: string;
}

const MONTHS_DA = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN',
  'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC',
];

@Component({
  selector: 'app-lyd-pictures',
  imports: [],
  templateUrl: './lyd-pictures.html',
  styleUrl: './lyd-pictures.scss',
})
export class LydPictures implements OnInit {
  protected readonly events = signal<EventRow[]>([]);
  protected readonly loading = signal(true);
  protected readonly loadError = signal(false);

  pictures: Picture[] = [
    {
      id: 1,
      title: 'Lydrejse 1',
      thumbnail: '/lydmini5.png',
    },
    {
      id: 2,
      title: 'Lydrejse 2',
      thumbnail: '/lydmini1.png',
    },
    {
      id: 3,
      title: 'Lydrejse 3',
      thumbnail: '/lydmini3.png',
    },
  ];

  async ngOnInit(): Promise<void> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('published', true)
      .order('event_date', { ascending: true });

    if (error) {
      this.loadError.set(true);
    } else {
      this.events.set(data ?? []);
    }

    this.loading.set(false);
  }

  protected formatMonth(dateStr: string): string {
    return MONTHS_DA[new Date(dateStr).getMonth()];
  }

  protected formatDay(dateStr: string): string {
    return String(new Date(dateStr).getDate());
  }

  protected formatTime(start: string, end: string): string {
    return `Kl. ${start.slice(0, 5)}-${end.slice(0, 5)}`;
  }

  protected formatPrice(price: number): string {
    return `${price} kr.`;
  }
}
