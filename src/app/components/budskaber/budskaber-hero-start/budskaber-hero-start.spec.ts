import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberHeroStart } from './budskaber-hero-start';

describe('BudskaberHeroStart', () => {
  let component: BudskaberHeroStart;
  let fixture: ComponentFixture<BudskaberHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
