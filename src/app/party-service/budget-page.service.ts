import { Injectable } from '@angular/core';
import { Expense } from '../party-pojo/expense';
import { Budget } from '../party-pojo/budget';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../party-pojo/event-details';
import { BudgetCategory } from '../party-pojo/budget-category';

@Injectable()
export class BudgetPageService {
  private eventDetailsObject: EventDetails;
  
  constructor(private service: PartyDetailsService){ 
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
    }

  // Database call to get the totalbudget
  getTotalPartyBudget() {
    return 1000;
  }

  //To Calculate total expense
  calculateTotalExpense(expensesList:Array<Expense>) {
    let totalexpense = 0;
    expensesList.forEach(function (value) {
      totalexpense = value.amount + totalexpense;
    });
    return totalexpense;
  }

  //To calculate Total quantity
  calculateTotalQuantity(expensesList:Array<Expense>) {
    let totalQuantity = 0;
    expensesList.forEach(function (value) {
      totalQuantity = value.quantity + totalQuantity;
    });
    return totalQuantity;
  }

  saveBudget(budget:Budget,budgetCategory:BudgetCategory){
   this.eventDetailsObject.budget=budget;
   this.service.editEventDetails(this.eventDetailsObject);
   console.log(this.eventDetailsObject);
  }


}
