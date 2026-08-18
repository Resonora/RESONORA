import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStart } from './hero-start';

describe('HeroStart', () => {
  let component: HeroStart;
  let fixture: ComponentFixture<HeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
