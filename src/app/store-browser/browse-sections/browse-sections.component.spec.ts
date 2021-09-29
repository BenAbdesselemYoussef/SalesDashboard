import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSectionsComponent } from './browse-sections.component';

describe('BrowseSectionsComponent', () => {
  let component: BrowseSectionsComponent;
  let fixture: ComponentFixture<BrowseSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
