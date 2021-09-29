import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaliseOrderComponent } from './finalise-order.component';

describe('FinaliseOrderComponent', () => {
  let component: FinaliseOrderComponent;
  let fixture: ComponentFixture<FinaliseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinaliseOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaliseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
