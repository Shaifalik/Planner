import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../party-pojo/expense';
import { Budget } from '../party-pojo/budget';
import { BudgetPageService } from '../party-service/budget-page.service';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css'],
  providers: [Expense, Budget, BudgetPageService]
})
export class BudgetPageComponent implements OnInit {
  private expensesList: Array<Expense> = [];
  private expenseName = '';
  private expenseAmount = 0;
  private newBudget: Budget;
  private totalPartyBudget ;
  private totalContriBudget ;
  private remainingExpenseAmount;

  constructor(service: BudgetPageService) {
    this.totalPartyBudget = service.getTotalPartyBudget();
    this.totalContriBudget = service.getTotalContriBudget();
    this.remainingExpenseAmount = this.totalPartyBudget ;
  }

  ngOnInit() {
  }

  addNewExpense() {
    if (this.expenseName !== '' && this.expenseAmount !== 0) {
      this.expensesList.push(new Expense(this.expenseName, this.expenseAmount));
      this.expenseName = '';
      this.expenseAmount = 0;
    }
    this.remainingPartyBudget();
  }

  removeExpense(index: number) {
    this.expensesList.splice(index, 1);
    this.remainingPartyBudget();
  }

  sumTotalExpense() {
    let totalExpenseValue = 0;
    this.expensesList.forEach(function(value) {
      totalExpenseValue = value.expense_amount + totalExpenseValue;
    });
    return totalExpenseValue;
  }

  remainingPartyBudget() {
    this.remainingExpenseAmount = this.totalPartyBudget - this.sumTotalExpense();
  }

  remainingContriBudget() {

  }

  submitNewBudget(newBudgetForm: NgForm) {
    let data = JSON.stringify(newBudgetForm.value);
    const obj = JSON.parse(data);
    let s = obj.budgetType;
    console.log(s);
  }

}
