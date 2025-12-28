import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNumber } from './my-number';

describe('MyNumber', () => {
  let component: MyNumber;
  let fixture: ComponentFixture<MyNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
