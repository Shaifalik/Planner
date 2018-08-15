export class Guest {
    private _guestListId: number;
    constructor(private _guestEmailId: string){}
    
    public get guestEmailId(): string {
        return this._guestEmailId;
    }
    public set guestEmailId(value: string) {
        this._guestEmailId = value;
    }

    public get guestListId(): number {
        return this._guestListId;
    }
    public set guestListId(value: number) {
        this._guestListId = value;
    }
  
}
