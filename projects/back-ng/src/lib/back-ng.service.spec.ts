import { TestBed } from '@angular/core/testing';

import { BackNGService } from './back-ng.service';

describe('BackNGService', () => {
  let service: BackNGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackNGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
