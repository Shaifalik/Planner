export class Food {
    private _foodId: number;
    constructor( private _foodItem: string) {
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
