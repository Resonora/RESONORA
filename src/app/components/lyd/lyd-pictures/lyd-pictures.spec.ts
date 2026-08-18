import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydPictures } from './lyd-pictures';

describe('LydPictures', () => {
  let component: LydPictures;
  let fixture: ComponentFixture<LydPictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydPictures],
    }).compileComponents();

    fixture = TestBed.createComponent(LydPictures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
