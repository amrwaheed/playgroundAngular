import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards0Component } from './cards0.component';

describe('Cards0Component', () => {
  let component: Cards0Component;
  let fixture: ComponentFixture<Cards0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cards0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
