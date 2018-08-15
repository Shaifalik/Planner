import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Food } from '../pojos/food';
import { FoodPageService } from '../services/food-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodPageService]
})

export class FoodPageComponent implements OnInit {
  private foodList: Array<Food>;
  model: Food = new Food("");
  isClickedOnce = false;
  private storedFoodList: Array<Food>;

  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  constructor(private service: FoodPageService, private router: Router) {
  }

  ngOnInit(): void {
    this.foodList = this.service.getTemporaryFoodList();
    if (this.foodList == undefined) {
      this.foodList = [];
    }
    this.service.getAvailableFoodList().subscribe((result) => { this.storedFoodList = result; });
  }

  addNewFoodItem() {
    if (this.model.foodItem !== '') {
      if(this.foodList.length>0){
      for (var i = 0; i < this.foodList.length; i++) {
        if (!this.foodList[i].foodItem.match(this.model.foodItem)) {
          this.foodList.push(new Food(this.model.foodItem));
        }
      }
    }
    else{
      this.foodList.push(new Food(this.model.foodItem));
    }
      this.model.foodItem = '';
    }
  }

  removeFoodItem(index: number) {
    this.foodList.splice(index, 1);
  }

  onSubmit(newFoodItemsForm: NgForm) {
    this.service.saveFoodList(this.foodList);
    this.isClickedOnce = true;
    //this.changeTab.emit(4);
  }

}
