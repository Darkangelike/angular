import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageChildBComponent } from './second-page-child-b.component';

describe('SecondPageChildBComponent', () => {
  let component: SecondPageChildBComponent;
  let fixture: ComponentFixture<SecondPageChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
