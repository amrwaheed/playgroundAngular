import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaygroundComponent } from './edit-playground.component';

describe('EditPlaygroundComponent', () => {
  let component: EditPlaygroundComponent;
  let fixture: ComponentFixture<EditPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
