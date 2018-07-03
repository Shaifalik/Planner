import { Injectable } from "@angular/core";

@Injectable()
export class BudgetCategory {
    private _budgetCategoryId: number;
    private _budgetCategoryName: string;
    private _budgetCategoryAmount: number;
    
    public get budgetCategoryId(): number {
        return this._budgetCategoryId;
    }
    public set budgetCategoryId(value: number) {
        this._budgetCategoryId = value;
    }

    public get budgetCategoryName(): string {
        return this._budgetCategoryName;
    }
    public set budgetCategoryName(value: string) {
        this._budgetCategoryName = value;
    }

    public get budgetCategoryAmount(): number {
        return this._budgetCategoryAmount;
    }
    public set budgetCategoryAmount(value: number) {
        this._budgetCategoryAmount = value;
    }

   
}
