import { TestBed, inject } from '@angular/core/testing';

import { GuestPageService } from './guest-page.service';

describe('GuestPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestPageService]
    });
  });

  it('should be created', inject([GuestPageService], (service: GuestPageService) => {
    expect(service).toBeTruthy();
  }));
});
