import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReikiThoughts } from './reiki-thoughts';

describe('ReikiThoughts', () => {
  let component: ReikiThoughts;
  let fixture: ComponentFixture<ReikiThoughts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiThoughts],
    }).compileComponents();

    fixture = TestBed.createComponent(ReikiThoughts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
