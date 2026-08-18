import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KropsterapiAboutme } from './kropsterapi-aboutme';

describe('KropsterapiAboutme', () => {
  let component: KropsterapiAboutme;
  let fixture: ComponentFixture<KropsterapiAboutme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KropsterapiAboutme],
    }).compileComponents();

    fixture = TestBed.createComponent(KropsterapiAboutme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
