import { TestBed, inject } from '@angular/core/testing';
import { FoodPageService } from './food-page.service';


describe('FoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodPageService]
    });
  });

  it('should be created', inject([FoodPageService], (service: FoodPageService) => {
    expect(service).toBeTruthy();
  }));
});
