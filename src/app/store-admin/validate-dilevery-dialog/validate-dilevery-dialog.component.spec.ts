import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDileveryDialogComponent } from './validate-dilevery-dialog.component';

describe('ValidateDileveryDialogComponent', () => {
  let component: ValidateDileveryDialogComponent;
  let fixture: ComponentFixture<ValidateDileveryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateDileveryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateDileveryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
