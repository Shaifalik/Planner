import { TestBed, inject } from '@angular/core/testing';

import { EventListService } from './event-list-page.service';

describe('LoginPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListService]
    });
  });

  it('should be created', inject([EventListService], (service: EventListService) => {
    expect(service).toBeTruthy();
  }));
});
