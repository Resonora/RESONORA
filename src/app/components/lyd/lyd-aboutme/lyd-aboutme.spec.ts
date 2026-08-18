import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydAboutme } from './lyd-aboutme';

describe('LydAboutme', () => {
  let component: LydAboutme;
  let fixture: ComponentFixture<LydAboutme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydAboutme],
    }).compileComponents();

    fixture = TestBed.createComponent(LydAboutme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
