import { TestBed } from '@angular/core/testing';

import { AuthHardcodedService } from './auth-hardcoded.service';

describe('AuthHardcodedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHardcodedService = TestBed.get(AuthHardcodedService);
    expect(service).toBeTruthy();
  });
});
