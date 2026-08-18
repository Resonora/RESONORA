import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kropsterapi } from './kropsterapi';

describe('Kropsterapi', () => {
  let component: Kropsterapi;
  let fixture: ComponentFixture<Kropsterapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kropsterapi],
    }).compileComponents();

    fixture = TestBed.createComponent(Kropsterapi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
