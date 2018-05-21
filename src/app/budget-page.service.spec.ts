import { TestBed, inject } from '@angular/core/testing';

import { BudgetPageService } from './budget-page.service';

describe('BudgetPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetPageService]
    });
  });

  it('should be created', inject([BudgetPageService], (service: BudgetPageService) => {
    expect(service).toBeTruthy();
  }));
});
