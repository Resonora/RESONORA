import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHer } from './start-her';

describe('StartHer', () => {
  let component: StartHer;
  let fixture: ComponentFixture<StartHer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartHer],
    }).compileComponents();

    fixture = TestBed.createComponent(StartHer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
