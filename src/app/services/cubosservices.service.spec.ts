import { TestBed } from '@angular/core/testing';

import { CubosservicesService } from './cubosservices.service';

describe('CubosservicesService', () => {
  let service: CubosservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubosservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
