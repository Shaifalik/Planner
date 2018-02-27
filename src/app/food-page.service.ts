import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable()
export class FoodService {
  private items:Array<Food>;
  private itemsList:Array<String>;

  constructor() { }

  getFoodItems() {
    return this.items=[
        {
          list_name: 'Food1',
          item_list: ['Burger,Pizza']
        },
        {
          list_name: 'Food2',
          item_list: ['Burger,Pizza']
        },
        {
          list_name: 'Food2',
          item_list: ['Burger,Pizza']
        }
    ]
  }

  getFoodObject(){
    new Food();
  }

}
