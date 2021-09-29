import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsDialogComponent } from './orders-details-dialog.component';

describe('OrdersDetailsDialogComponent', () => {
  let component: OrdersDetailsDialogComponent;
  let fixture: ComponentFixture<OrdersDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
