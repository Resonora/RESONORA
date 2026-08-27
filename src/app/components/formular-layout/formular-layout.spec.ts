import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularLayout } from './formular-layout';

describe('FormularLayout', () => {
  let component: FormularLayout;
  let fixture: ComponentFixture<FormularLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
