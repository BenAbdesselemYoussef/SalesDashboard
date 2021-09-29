import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanProductDialogComponent } from './ban-product-dialog.component';

describe('BanProductDialogComponent', () => {
  let component: BanProductDialogComponent;
  let fixture: ComponentFixture<BanProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanProductDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
