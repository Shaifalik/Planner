import { Injectable } from '@angular/core';

@Injectable()
export class Expense {
    public _expenseId: number;
    public _food: string;
    public _amount: number;
    public _quantity: number;

    constructor(food: string, amount: number, quantity: number) {
        this._food = food;
        this._amount = amount;
        this._quantity = quantity;
    }

    public get food(): string {
        return this._food;
    }
    public set food(value: string) {
        this._food = value;
    }

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }

    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

    public get expenseId(): number {
        return this._expenseId;
    }
    public set expenseId(value: number) {
        this._expenseId = value;
    }

}

