import { TestBed } from '@angular/core/testing';

import { GovernorateService } from './governorate.service';

describe('GovernorateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GovernorateService = TestBed.get(GovernorateService);
    expect(service).toBeTruthy();
  });
});
