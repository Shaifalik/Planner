import { Injectable } from "@angular/core";

@Injectable()
export class BudgetCategory {
    private _budgetCategoryId: number;
    private _budgetCategoryName: string;
    private _budgetCategoryAmount: number;

    constructor(_budgetCategoryId: number, _budgetCategoryName: string, _budgetCategoryAmount: number) {
        this._budgetCategoryId = _budgetCategoryId;
        this._budgetCategoryName = _budgetCategoryName;
        this._budgetCategoryAmount = _budgetCategoryAmount;
    }

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
