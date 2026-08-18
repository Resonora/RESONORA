import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout } from './section-about';

describe('SectionAbout', () => {
  let component: SectionAbout;
  let fixture: ComponentFixture<SectionAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
