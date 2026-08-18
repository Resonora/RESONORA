import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntuitivHeroStart } from './intuitiv-hero-start';

describe('IntuitivHeroStart', () => {
  let component: IntuitivHeroStart;
  let fixture: ComponentFixture<IntuitivHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntuitivHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(IntuitivHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
