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
  private foodItemsList: Array<string>;// Used for unique Validator as it works only on array of string
  private foodList: Array<Food>;
  private model: Food = new Food("");
  private isPageSaved: Boolean;
  private dbFoodList: Array<Food>;
  private ItemFieldIsEmpty = false;
  private isUnique = true;

  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private foodService: FoodPageService, private mainService: PartyDetailsService, private router: Router) {
  }

  ngOnInit(): void {
    this.foodList = this.foodService.getStoredList(); // Function to get the persisted the data
    this.isPageSaved = this.mainService.isFoodPageSaved;  //function to persist the user action
    if (this.foodList == undefined) {
      this.foodList = [];
    }
    if (this.foodItemsList == undefined) {
      this.foodItemsList = []; //List is used to validate unique value of foodList, used in Validator.
    }
    this.foodService.getAvailableFoodList().subscribe((result) => { this.dbFoodList = result; });
  }

  addNewFoodItem() {
    this.ItemFieldIsEmpty = true;
    if (this.model.foodItem !== '') {
      this.model.foodItem = this.model.foodItem.toUpperCase();
      this.foodList.push(new Food(this.model.foodItem));
      this.foodItemsList.push(this.model.foodItem);
      this.model.foodItem = '';
      this.ItemFieldIsEmpty = false;
    }
  }

  removeFoodItem(index: number) {
    this.foodList.splice(index, 1);
  }

  onEdit() {
    this.mainService.isFoodPageSaved = false;
    this.isPageSaved = false;
    this.changeTab.emit(false);
  }

  onSubmit(newFoodItemsForm: NgForm) {
    this.foodService.saveFoodList(this.foodList);
    this.mainService.isFoodPageSaved = true;
    this.isPageSaved = true;
    this.changeTab.emit(true);// Submit enabled
    newFoodItemsForm.reset();
  }
}
