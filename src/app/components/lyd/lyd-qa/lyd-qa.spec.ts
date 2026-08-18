import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydQa } from './lyd-qa';

describe('LydQa', () => {
  let component: LydQa;
  let fixture: ComponentFixture<LydQa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydQa],
    }).compileComponents();

    fixture = TestBed.createComponent(LydQa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
