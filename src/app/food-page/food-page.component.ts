import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Food } from '../party-pojo/food';
import { FoodListService } from '../party-service/food-page.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodListService]
})

export class FoodPageComponent implements OnInit {
  private foodList: Array<Food>;
  private foodItem = '';

  constructor(private service: FoodListService) {}

  ngOnInit(): void {
    this.foodList=[];
  }

  addNewFoodItem() {
    if (this.foodItem !== '') {
    this.foodList.push(new Food(this.foodItem));
    this.foodItem = '';
    }
  }

  removeFoodItem(index: number) {
    this.foodList.splice(index, 1);
  }

  submitFoodList(newFoodItemsForm: NgForm) {
    this.service.setFoodObject(newFoodItemsForm.value);
    console.log('Successful registration');
  }

}
