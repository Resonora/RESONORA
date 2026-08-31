import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KropsterapiThoughts } from './kropsterapi-thoughts';

describe('KropsterapiThoughts', () => {
  let component: KropsterapiThoughts;
  let fixture: ComponentFixture<KropsterapiThoughts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KropsterapiThoughts],
    }).compileComponents();

    fixture = TestBed.createComponent(KropsterapiThoughts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
