import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsignComponent } from './logsign.component';

describe('LogsignComponent', () => {
  let component: LogsignComponent;
  let fixture: ComponentFixture<LogsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
