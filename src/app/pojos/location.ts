export class Location {
    public _locationId: number;


    constructor(public _eventLocation: String,public _eventAddress: String) {
    }

    public get locationId(): number {
        return this._locationId;
    }
    public set locationId(value: number) {
        this._locationId = value;
    }

    public get eventLocation(): String {
        return this._eventLocation;
    }
    public set eventLocation(value: String) {
        this._eventLocation = value;
    }
   
    public get eventAddress(): String {
        return this._eventAddress;
    }
    public set eventAddress(value: String) {
        this._eventAddress = value;
    }
   
}
