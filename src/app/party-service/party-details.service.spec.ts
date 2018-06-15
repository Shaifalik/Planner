import { TestBed, inject } from '@angular/core/testing';

import { PartyDetailsService } from './party-details.service';

describe('PartyDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyDetailsService]
    });
  });

  it('should be created', inject([PartyDetailsService], (service: PartyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
