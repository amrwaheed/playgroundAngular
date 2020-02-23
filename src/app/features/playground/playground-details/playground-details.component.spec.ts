import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundDetailsComponent } from './playground-details.component';

describe('PlaygroundDetailsComponent', () => {
  let component: PlaygroundDetailsComponent;
  let fixture: ComponentFixture<PlaygroundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
