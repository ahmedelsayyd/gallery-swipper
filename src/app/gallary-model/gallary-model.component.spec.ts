import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryModelComponent } from './gallary-model.component';

describe('GallaryModelComponent', () => {
  let component: GallaryModelComponent;
  let fixture: ComponentFixture<GallaryModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallaryModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
