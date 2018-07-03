import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../party-pojo/expense';
import { Budget } from '../party-pojo/budget';
import { BudgetPageService } from '../party-service/budget-page.service';
import { BudgetCategory } from '../party-pojo/budget-category';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css'],
  providers: [BudgetPageService]
})

export class BudgetPageComponent implements OnInit {
  private expensesList: Array<Expense> = [];
  private expense: Expense = new Expense("", 0, 0);
  private budget: Budget = new Budget();
  private category: BudgetCategory = new BudgetCategory();
  isClickedOnce=false;

  constructor(private service: BudgetPageService) {
    this.category.budgetCategoryAmount = this.service.getTotalPartyBudget();
  }

  ngOnInit() {
    this.expensesList = [];
  }

  //To add Expenses
  addNewExpense() {
    if (this.expense.food !== '' && this.expense.amount !== 0 && this.expense.quantity !== 0) {
      this.expensesList.push(new Expense(this.expense.food, this.expense.amount, this.expense.quantity));
      this.expense.food = '';
      this.expense.amount = 0;
      this.expense.quantity = 0;
    }
  }

  //To remove expenses
  removeExpense(index: number) {
    this.expensesList.splice(index, 1);
  }


  onSubmit(budgetForm: NgForm) {
    this.budget.totalExpense = this.service.calculateTotalExpense(this.expensesList);
    this.budget.totalQuantity = this.service.calculateTotalQuantity(this.expensesList);
    this.budget.expenseList=this.expensesList;
    this.category.budgetCategoryAmount = this.category.budgetCategoryAmount - this.budget.totalExpense;
    this.service.saveBudget(this.budget,this.category);
    this.isClickedOnce=true;
  }

}
