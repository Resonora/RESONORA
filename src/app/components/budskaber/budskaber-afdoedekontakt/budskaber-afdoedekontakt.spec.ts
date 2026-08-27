import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberAfdoedekontakt } from './budskaber-afdoedekontakt';

describe('BudskaberAfdoedekontakt', () => {
  let component: BudskaberAfdoedekontakt;
  let fixture: ComponentFixture<BudskaberAfdoedekontakt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberAfdoedekontakt],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberAfdoedekontakt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
