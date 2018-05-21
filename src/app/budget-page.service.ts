import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable()
export class BudgetPageService {
  private expensesList: Array<Expense> = [];

  constructor() { }

  // Database call to get the totalbudget
  getTotalPartyBudget() {
    return 1000;
  }

  // Database call to get the totalContribudget
  getTotalContriBudget() {
    return 600;
  }

}
