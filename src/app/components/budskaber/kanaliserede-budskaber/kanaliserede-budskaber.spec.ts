import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaliseredeBudskaber } from './kanaliserede-budskaber';

describe('KanaliseredeBudskaber', () => {
  let component: KanaliseredeBudskaber;
  let fixture: ComponentFixture<KanaliseredeBudskaber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanaliseredeBudskaber],
    }).compileComponents();

    fixture = TestBed.createComponent(KanaliseredeBudskaber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
