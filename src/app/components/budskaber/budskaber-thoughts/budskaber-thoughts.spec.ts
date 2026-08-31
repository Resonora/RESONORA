import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudskaberThoughts } from './budskaber-thoughts';

describe('BudskaberThoughts', () => {
  let component: BudskaberThoughts;
  let fixture: ComponentFixture<BudskaberThoughts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudskaberThoughts],
    }).compileComponents();

    fixture = TestBed.createComponent(BudskaberThoughts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
