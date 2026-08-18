import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lyd } from './lyd';

describe('Lyd', () => {
  let component: Lyd;
  let fixture: ComponentFixture<Lyd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lyd],
    }).compileComponents();

    fixture = TestBed.createComponent(Lyd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
