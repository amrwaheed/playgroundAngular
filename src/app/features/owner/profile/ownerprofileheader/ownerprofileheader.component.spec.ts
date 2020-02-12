import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerprofileheaderComponent } from './ownerprofileheader.component';

describe('OwnerprofileheaderComponent', () => {
  let component: OwnerprofileheaderComponent;
  let fixture: ComponentFixture<OwnerprofileheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerprofileheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerprofileheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
