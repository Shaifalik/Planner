import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { Expense } from '../pojos/expense';
import { Budget } from '../pojos/budget';
import { BudgetPageService } from '../services/budget-page.service';
import { BudgetCategory } from '../pojos/budget-category';
import { Food } from '../pojos/food';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css'],
  providers: [BudgetPageService]
})

export class BudgetPageComponent implements OnInit {
  private expensesList: Array<Expense> = [];
  private expense: Expense = new Expense("", 0, 0);
  private budget = new Budget();
  private foodList: Array<Food>;
  private category = new BudgetCategory(0, "", 0);
  private ctgyList: Array<BudgetCategory>;
  isClickedOnce = false;
  private result: number;
  hiddenForm = true;

  constructor(private service: BudgetPageService) {
  }

  ngOnInit() {
    this.expensesList = [];
    this.service.getAllBudgetCategories()
      .subscribe(
        (data: Array<BudgetCategory>) => this.ctgyList = data,
        error => console.log("Error :: " + error));
    this.foodList = this.service.getEventFoodItems();
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

  onSelectBudget(value) {
    this.category.budgetCategoryId = value._budgetCategoryId;
    this.category.budgetCategoryName = value._budgetCategoryName;
    this.category.budgetCategoryAmount = value._budgetCategoryAmount;
  }

  onSubmit(budgetForm: NgForm) {
    this.budget.totalExpense = this.service.calculateTotalExpense(this.expensesList);
    this.budget.totalQuantity = this.service.calculateTotalQuantity(this.expensesList);
    this.category.budgetCategoryAmount = this.category.budgetCategoryAmount - this.budget.totalExpense;
    this.budget.budgetCategoryId = this.category.budgetCategoryId;
    this.budget.expenseList = this.expensesList;
    this.service.updateBudgetCategoryData(this.category)
      .subscribe(
        (data: number) => this.result = data);
    this.service.saveBudget(this.budget);
    this.isClickedOnce = true;
  }

}
