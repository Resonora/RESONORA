import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KropsterapiHowto } from './kropsterapi-howto';

describe('KropsterapiHowto', () => {
  let component: KropsterapiHowto;
  let fixture: ComponentFixture<KropsterapiHowto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KropsterapiHowto],
    }).compileComponents();

    fixture = TestBed.createComponent(KropsterapiHowto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
