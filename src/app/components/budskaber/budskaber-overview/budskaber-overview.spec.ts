import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberOverview } from './budskaber-overview';

describe('BudskaberOverview', () => {
  let component: BudskaberOverview;
  let fixture: ComponentFixture<BudskaberOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
