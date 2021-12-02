import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMoviesListComponent } from './display-movies-list.component';

describe('DisplayMoviesListComponent', () => {
  let component: DisplayMoviesListComponent;
  let fixture: ComponentFixture<DisplayMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMoviesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
