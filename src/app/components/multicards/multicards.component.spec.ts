import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticardsComponent } from './multicards.component';

describe('MulticardsComponent', () => {
  let component: MulticardsComponent;
  let fixture: ComponentFixture<MulticardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
