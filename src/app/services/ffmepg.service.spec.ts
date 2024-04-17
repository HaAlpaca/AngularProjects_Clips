import { TestBed } from '@angular/core/testing';

import { FfmepgService } from './ffmepg.service';

describe('FfmepgService', () => {
  let service: FfmepgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfmepgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
