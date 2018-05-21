import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable()
export class FoodService {
  private foodItems: Array<Food>;

  constructor() { }

  // Service to fetch all food items entered in other parties show it in dropdown box.
  getFoodItems() {
    return this.foodItems = [
        {
          foodItem: 'Burger'
        },
        {
          foodItem: 'Fries'
        },
        {
          foodItem: 'Subway'
        }
    ];
  }

  // Service to store the unique food Items list in food table on Save and Continue.

}
