import { TestBed } from '@angular/core/testing';

import { FbiapiService } from './fbiapi.service';

describe('FbiapiService', () => {
  let service: FbiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
