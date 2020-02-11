import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormplayerComponent } from './formplayer.component';

describe('FormplayerComponent', () => {
  let component: FormplayerComponent;
  let fixture: ComponentFixture<FormplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
