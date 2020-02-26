import { TestBed } from '@angular/core/testing';

import { PlaygroundService } from './playground.service';

describe('PlaygroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaygroundService = TestBed.get(PlaygroundService);
    expect(service).toBeTruthy();
  });
});
