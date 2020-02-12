import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerprofileeditComponent } from './ownerprofileedit.component';

describe('OwnerprofileeditComponent', () => {
  let component: OwnerprofileeditComponent;
  let fixture: ComponentFixture<OwnerprofileeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerprofileeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
