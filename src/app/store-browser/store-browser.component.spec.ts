import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBrowserComponent } from './store-browser.component';

describe('StoreBrowserComponent', () => {
  let component: StoreBrowserComponent;
  let fixture: ComponentFixture<StoreBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
