import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Food } from '../party-pojo/food';
import { FoodPageService } from '../party-service/food-page.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodPageService]
})

export class FoodPageComponent implements OnInit {
  private foodList: Array<Food>;
  model: Food = new Food("");
  isClickedOnce=false;

  constructor(private service: FoodPageService) { }

  ngOnInit(): void {
    this.foodList = [];
  }

  addNewFoodItem() {
    if (this.model.foodItem !== '') {
      this.foodList.push(new Food(this.model.foodItem));
      this.model.foodItem = '';
    }
  }

  removeFoodItem(index: number) {
    this.foodList.splice(index, 1);
  }

  onSubmit(newFoodItemsForm: NgForm) {
    this.service.saveFoodList(this.foodList);
    this.isClickedOnce=true;
  }

}
