import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable()
export class FoodService {
  private foodItems: Array<Food>;

  constructor() { }

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

}
