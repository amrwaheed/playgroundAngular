import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPorfileComponent } from './edit-porfile.component';

describe('EditPorfileComponent', () => {
  let component: EditPorfileComponent;
  let fixture: ComponentFixture<EditPorfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPorfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
