import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydAbout } from './lyd-about';

describe('LydAbout', () => {
  let component: LydAbout;
  let fixture: ComponentFixture<LydAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(LydAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
