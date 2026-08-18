import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KropsterapiHeroStart } from './kropsterapi-hero-start';

describe('KropsterapiHeroStart', () => {
  let component: KropsterapiHeroStart;
  let fixture: ComponentFixture<KropsterapiHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KropsterapiHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(KropsterapiHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
