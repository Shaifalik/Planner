import { TestBed, inject } from '@angular/core/testing';

import { OverviewPageService } from './overview-page.service';

describe('OverviewPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewPageService]
    });
  });

  it('should be created', inject([OverviewPageService], (service: OverviewPageService) => {
    expect(service).toBeTruthy();
  }));
});
