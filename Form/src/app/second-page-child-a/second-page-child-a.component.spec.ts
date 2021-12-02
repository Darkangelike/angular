import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageChildAComponent } from './second-page-child-a.component';

describe('SecondPageChildAComponent', () => {
  let component: SecondPageChildAComponent;
  let fixture: ComponentFixture<SecondPageChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
