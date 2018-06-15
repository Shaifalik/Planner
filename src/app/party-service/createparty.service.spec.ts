import { TestBed, inject } from '@angular/core/testing';

import { CreatepartyService } from './createparty.service';

describe('CreatepartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatepartyService]
    });
  });

  it('should be created', inject([CreatepartyService], (service: CreatepartyService) => {
    expect(service).toBeTruthy();
  }));
});
