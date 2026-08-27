import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiOverview } from './reiki-overview';

describe('ReikiOverview', () => {
  let component: ReikiOverview;
  let fixture: ComponentFixture<ReikiOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ReikiOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
