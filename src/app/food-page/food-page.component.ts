import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Food } from '../pojos/food';
import { FoodPageService } from '../services/food-page.service';
import { Router } from '@angular/router';
import { ErrorServiceService } from '../services/error-service.service';
import { PartyDetailsService } from '../services/party-details.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  providers: [FoodPageService]
})

export class FoodPageComponent implements OnInit {
  // Used for unique Validator as it works only on array of string
  foodItemsList: Array<string>;
  private foodList: Array<Food>;
  private model: Food = new Food("");
  dbFoodList: Array<string>;
  isPageSaved: Boolean;
  allowValidation: boolean;

  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private foodService: FoodPageService, private mainService: PartyDetailsService, private router: Router) {
  }

  ngOnInit(): void {
    // Function to get the persisted the data
    this.foodList = this.foodService.getStoredList();
    if (this.foodList == undefined) {
      this.foodList = [];
    }
    // Function to persist the user action on Save button
    this.isPageSaved = this.mainService.isFoodPageSaved;

    // List is used to validate unique value of foodList, used in Validator.
    if (this.foodItemsList == undefined) {
      this.foodItemsList = [];
    }

    // DbFoodList to show list food options from db in drop down
    this.foodService.getAvailableFoodList().subscribe((result) =>
     { this.dbFoodList = result; });
  }

  addNewFoodItem(newFoodForm: NgForm) {
    this.allowValidation = true;
    if (this.model.foodItem !== '' && newFoodForm.valid) {
      this.model.foodItem = this.model.foodItem.toLowerCase();
      this.foodList.push(new Food(this.model.foodItem));
      this.foodItemsList.push(this.model.foodItem);
      this.model.foodItem = '';
      this.allowValidation = false;
    }
  }

  removeFoodItem(index: number, newFoodForm: NgForm) {
    this.foodList.splice(index, 1);
    this.foodItemsList.splice(index, 1);
    newFoodForm.reset();
  }

  onEdit() {
    this.mainService.isFoodPageSaved = false;
    this.isPageSaved = false;
    this.changeTab.emit(false);
  }

  onSubmit(newFoodForm: NgForm) {
    this.foodService.saveFoodList(this.foodList);
    this.mainService.isFoodPageSaved = true;
    this.isPageSaved = true;
    this.changeTab.emit(true);// Submit enabled
    newFoodForm.reset();
  }
}
