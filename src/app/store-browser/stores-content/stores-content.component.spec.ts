import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresContentComponent } from './stores-content.component';

describe('StoresContentComponent', () => {
  let component: StoresContentComponent;
  let fixture: ComponentFixture<StoresContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
