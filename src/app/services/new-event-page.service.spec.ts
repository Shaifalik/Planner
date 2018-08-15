import { TestBed, inject } from '@angular/core/testing';

import { NewEventPageService } from './new-event-page.service';

describe('NewEventPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewEventPageService]
    });
  });

  it('should be created', inject([NewEventPageService], (service: NewEventPageService) => {
    expect(service).toBeTruthy();
  }));
});
