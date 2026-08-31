import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberAboutme } from './budskaber-aboutme';

describe('BudskaberAboutme', () => {
  let component: BudskaberAboutme;
  let fixture: ComponentFixture<BudskaberAboutme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberAboutme],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberAboutme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
