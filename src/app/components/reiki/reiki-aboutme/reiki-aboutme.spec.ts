import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiAboutme } from './reiki-aboutme';

describe('ReikiAboutme', () => {
  let component: ReikiAboutme;
  let fixture: ComponentFixture<ReikiAboutme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiAboutme],
    }).compileComponents();

    fixture = TestBed.createComponent(ReikiAboutme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
