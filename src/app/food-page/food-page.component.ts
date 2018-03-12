import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food-page.service';
import { Food } from '../food';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodService]
})

export class FoodPageComponent implements OnInit {
  private foodItemsList: Array<Food>;
  private foodItem = '';

  constructor(service: FoodService) {
   this.foodItemsList = service.getFoodItems();
  }

  ngOnInit() {
  }

  addNewFoodItem() {
    if (this.foodItem !== '') {
    this.foodItemsList.push(new Food(this.foodItem));
    this.foodItem = '';
    }
  }

  removeFoodItem(index: Number) {
    this.foodItemsList.splice(index, 1);
  }

  submitFoodList(newFoodItemsForm: NgForm) {
    console.log('Successful registration');
  }

}
