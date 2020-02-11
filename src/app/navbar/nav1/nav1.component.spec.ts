import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav1Component } from './nav1.component';

describe('Nav1Component', () => {
  let component: Nav1Component;
  let fixture: ComponentFixture<Nav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
