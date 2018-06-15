import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable()
export class Budget {
    party_budget: Number;
    contri_budget: Number;
    expenses: Array<Expense>;

    constructor(private new_party_budget: Number,private new_contri_budget: Number,private new_expenses: Array<Expense>) {
        this.party_budget = new_party_budget;
        this.contri_budget = new_contri_budget;
        this.expenses = new_expenses;
    }

    setPartyBudget(new_party_budget: Number) {
        this.party_budget = new_party_budget;
    }

    setContriBudget(new_contri_budget: Number) {
        this.contri_budget = new_contri_budget;
    }

    setNewExpenses(new_expenses: Array<Expense>) {
        this.expenses = new_expenses;
    }
}
