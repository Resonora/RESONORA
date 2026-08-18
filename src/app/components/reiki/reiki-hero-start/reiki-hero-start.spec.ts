import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiHeroStart } from './reiki-hero-start';

describe('ReikiHeroStart', () => {
  let component: ReikiHeroStart;
  let fixture: ComponentFixture<ReikiHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(ReikiHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
