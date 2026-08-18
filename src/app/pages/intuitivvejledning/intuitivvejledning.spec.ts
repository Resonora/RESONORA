import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intuitivvejledning } from './intuitivvejledning';

describe('Intuitivvejledning', () => {
  let component: Intuitivvejledning;
  let fixture: ComponentFixture<Intuitivvejledning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intuitivvejledning],
    }).compileComponents();

    fixture = TestBed.createComponent(Intuitivvejledning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
