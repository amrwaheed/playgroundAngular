import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerplaygroundComponent } from './ownerplayground.component';

describe('OwnerplaygroundComponent', () => {
  let component: OwnerplaygroundComponent;
  let fixture: ComponentFixture<OwnerplaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerplaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
