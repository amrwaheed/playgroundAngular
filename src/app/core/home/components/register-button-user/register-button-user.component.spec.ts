import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterButtonUserComponent } from './register-button-user.component';

describe('RegisterButtonUserComponent', () => {
  let component: RegisterButtonUserComponent;
  let fixture: ComponentFixture<RegisterButtonUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterButtonUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterButtonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
