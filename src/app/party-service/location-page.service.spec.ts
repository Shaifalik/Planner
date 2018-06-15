import { TestBed, inject } from '@angular/core/testing';

import { LocationPageService } from './location-page.service';

describe('LocationPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationPageService]
    });
  });

  it('should be created', inject([LocationPageService], (service: LocationPageService) => {
    expect(service).toBeTruthy();
  }));
});
