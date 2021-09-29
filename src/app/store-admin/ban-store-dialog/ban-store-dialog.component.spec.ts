import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanStoreDialogComponent } from './ban-store-dialog.component';

describe('BanStoreDialogComponent', () => {
  let component: BanStoreDialogComponent;
  let fixture: ComponentFixture<BanStoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanStoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanStoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
