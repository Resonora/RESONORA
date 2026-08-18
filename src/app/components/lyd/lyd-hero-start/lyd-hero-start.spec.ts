import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydHeroStart } from './lyd-hero-start';

describe('LydHeroStart', () => {
  let component: LydHeroStart;
  let fixture: ComponentFixture<LydHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(LydHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
