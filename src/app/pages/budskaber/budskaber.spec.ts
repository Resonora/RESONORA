import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Budskaber } from './budskaber';

describe('Budskaber', () => {
  let component: Budskaber;
  let fixture: ComponentFixture<Budskaber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Budskaber],
    }).compileComponents();

    fixture = TestBed.createComponent(Budskaber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
