import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { BudgetCategory } from './budget-category';

@Injectable()
export class Budget {
    private _budgetId: number;
    private _budgetCategoryId: number;
    private _totalExpense: number;
    private _totalQuantity: number;
    private _expenseList: Array<Expense>;
    
    public get expenseList(): Array<Expense> {
        return this._expenseList;
    }
    public set expenseList(value: Array<Expense>) {
        this._expenseList = value;
    }

    public get totalQuantity(): number {
        return this._totalQuantity;
    }
    public set totalQuantity(value: number) {
        this._totalQuantity = value;
    }
    public get totalExpense(): number {
        return this._totalExpense;
    }
    public set totalExpense(value: number) {
        this._totalExpense = value;
    }

    public get budgetId(): number {
        return this._budgetId;
    }
    public set budgetId(value: number) {
        this._budgetId = value;
    }

    public get budgetCategoryId(): number {
        return this._budgetCategoryId;
    }
    public set budgetCategoryId(value: number) {
        this._budgetCategoryId = value;
    }

}

