import { TestBed } from '@angular/core/testing';

import { MicrofrontendLibraryService } from './microfrontend-library.service';

describe('MicrofrontendLibraryService', () => {
  let service: MicrofrontendLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrofrontendLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
