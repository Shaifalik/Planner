export class Food {
    public _foodId: number;
    constructor( public _foodItem: string) {
    }

    public get foodId(): number {
        return this._foodId;
    }
    public set foodId(value: number) {
        this._foodId = value;
    }

    public get foodItem(): string {
        return this._foodItem;
    }
    public set foodItem(value: string) {
        this._foodItem = value;
    }

}
