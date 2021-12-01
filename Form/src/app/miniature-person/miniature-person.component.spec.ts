import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturePersonComponent } from './miniature-person.component';

describe('MiniaturePersonComponent', () => {
  let component: MiniaturePersonComponent;
  let fixture: ComponentFixture<MiniaturePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
