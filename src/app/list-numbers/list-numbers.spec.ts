import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumbers } from './list-numbers';

describe('ListNumbers', () => {
  let component: ListNumbers;
  let fixture: ComponentFixture<ListNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNumbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNumbers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
