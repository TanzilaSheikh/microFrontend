import { TestBed } from '@angular/core/testing';

import { MicroLibService } from './micro-lib.service';

describe('MicroLibService', () => {
  let service: MicroLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
