import { Injectable } from '@angular/core';
import { Food } from '../party-pojo/food';

@Injectable()
export class FoodListService {
  private foodItemsList: Array<Food>;

  setFoodObject(foodList: Array<Food>) {
    this.foodItemsList = foodList;
  }

  getFoodObject() {
    return this.foodItemsList;
  }

}
