import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reiki } from './reiki';

describe('Reiki', () => {
  let component: Reiki;
  let fixture: ComponentFixture<Reiki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reiki],
    }).compileComponents();

    fixture = TestBed.createComponent(Reiki);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
