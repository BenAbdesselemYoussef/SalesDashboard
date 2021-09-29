import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprotReviewDialogComponent } from './reprot-review-dialog.component';

describe('ReprotReviewDialogComponent', () => {
  let component: ReprotReviewDialogComponent;
  let fixture: ComponentFixture<ReprotReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprotReviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprotReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
