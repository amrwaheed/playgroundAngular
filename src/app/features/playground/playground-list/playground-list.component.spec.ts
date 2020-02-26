import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundListComponent } from './playground-list.component';

describe('PlaygroundListComponent', () => {
  let component: PlaygroundListComponent;
  let fixture: ComponentFixture<PlaygroundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
