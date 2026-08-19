import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lastwords } from './lastwords';

describe('Lastwords', () => {
  let component: Lastwords;
  let fixture: ComponentFixture<Lastwords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lastwords],
    }).compileComponents();

    fixture = TestBed.createComponent(Lastwords);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
