import { Injectable } from '@angular/core';
import { Expense } from '../pojos/expense';
import { Budget } from '../pojos/budget';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../pojos/event-details';
import { BudgetCategory } from '../pojos/budget-category';
import { RequestOptions, Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FoodPageService } from './food-page.service';
import { Food } from '../pojos/food';

@Injectable()
export class BudgetPageService {
  private eventDetailsObject: EventDetails;
  private headers = new Headers();
  foodList: Food[];
  foodItemsList: string[] = [];

  constructor(private service: PartyDetailsService, private http: Http) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  //To Calculate total expense
  calculateTotalExpense(expensesList: Array<Expense>) {
    let totalexpense = 0;
    expensesList.forEach(function (value) {
      totalexpense = value.amount + totalexpense;
    });
    return totalexpense;
  }

  //To calculate Total quantity
  calculateTotalQuantity(expensesList: Array<Expense>) {
    let totalQuantity = 0;
    expensesList.forEach(function (value) {
      totalQuantity = value.quantity + totalQuantity;
    });
    return totalQuantity;
  }

  //Saving the budget object in Event Details Object
  saveBudget(budget: Budget) {
    this.eventDetailsObject.budget = budget;
    this.service.editEventDetails(this.eventDetailsObject);
  }

  // Method to get all Budget Categories defined in Db
  getAllBudgetCategories(): Observable<Array<BudgetCategory>> {
    this.headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: this.headers });
    return this.http
      .get('http://localhost:8081/rest/fetchBudgetCategory', options)
      .map((response: Response) => {
        console.log(response.json());
        return <Array<BudgetCategory>>response.json()
      });
  }

  getEventFoodItems(): Array<Food> {
    return this.service.getStoredFoodList();
  }

  getFoodItemsList(): string[] {
    this.foodList = this.service.getStoredFoodList();
    if (this.foodList != undefined) {
      for (let food of this.foodList) {
        this.foodItemsList.push(food.foodItem);
      }
    }
    return this.foodItemsList;
  }

  getStoredEventBudget():Budget{
    return this.service.getStoredBudgetList();
  }

}
