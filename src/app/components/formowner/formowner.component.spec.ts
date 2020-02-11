import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormownerComponent } from './formowner.component';

describe('FormownerComponent', () => {
  let component: FormownerComponent;
  let fixture: ComponentFixture<FormownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
