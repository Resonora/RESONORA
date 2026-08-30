import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmMigHeroStart } from './om-mig-hero-start';

describe('OmMigHeroStart', () => {
  let component: OmMigHeroStart;
  let fixture: ComponentFixture<OmMigHeroStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmMigHeroStart],
    }).compileComponents();

    fixture = TestBed.createComponent(OmMigHeroStart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
