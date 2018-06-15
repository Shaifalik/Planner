import { Injectable } from '@angular/core';

@Injectable()
export class Expense {
    expense_name: String;
    expense_amount: number;

    constructor(new_expense_name: String, new_expense_amount: number) {
        this.expense_name = new_expense_name;
        this.expense_amount = new_expense_amount;
    }
}

