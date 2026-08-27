import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberQa } from './budskaber-qa';

describe('BudskaberQa', () => {
  let component: BudskaberQa;
  let fixture: ComponentFixture<BudskaberQa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberQa],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberQa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
