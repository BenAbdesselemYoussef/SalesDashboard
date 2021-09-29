import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionProductsDialogComponent } from './add-section-products-dialog.component';

describe('AddSectionProductsDialogComponent', () => {
  let component: AddSectionProductsDialogComponent;
  let fixture: ComponentFixture<AddSectionProductsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionProductsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionProductsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
