import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmMigTimeline } from './om-mig-timeline';

describe('OmMigTimeline', () => {
  let component: OmMigTimeline;
  let fixture: ComponentFixture<OmMigTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmMigTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(OmMigTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
