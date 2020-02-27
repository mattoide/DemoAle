import { TestBed } from '@angular/core/testing';

import { GetOptionsService } from './get-options.service';

describe('GetOptionsService', () => {
  let service: GetOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
