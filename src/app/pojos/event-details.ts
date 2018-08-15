import { Food } from "./food";
import { Location } from "./location";
import { Budget } from "./budget";
import { Event } from '../pojos/event';
import { Guest } from "./guest";

export class EventDetails {
    private _eventId: number;
    private _eventName: string;
    private _eventDescription: string;
    private _eventDate: Date;
    private _foodList: Array<Food>;
    private _locationList: Array<Location>;
    private _guestList: Array<Guest>;
    private _budget: Budget;

    public setEvent(event: Event) {
        this.eventName = event.eventName;
        this.eventDescription = event.eventDesc;
        this.eventDate = event.eventDate;
    }

    public get eventId(): number {
        return this._eventId;
    }
    public set eventId(value: number) {
        this._eventId = value;
    }

    public get eventName(): string {
        return this._eventName;
    }
    public set eventName(value: string) {
        this._eventName = value;
    }

    public get eventDescription(): string {
        return this._eventDescription;
    }
    public set eventDescription(value: string) {
        this._eventDescription = value;
    }

    public get eventDate(): Date {
        return this._eventDate;
    }
    public set eventDate(value: Date) {
        this._eventDate = value;
    }

    public get foodList(): Array<Food> {
        return this._foodList;
    }
    public set foodList(value: Array<Food>) {
        this._foodList = value;
    }

    public get locationList(): Array<Location> {
        return this._locationList;
    }
    public set locationList(value: Array<Location>) {
        this._locationList = value;
    }

    public get budget(): Budget {
        return this._budget;
    }
    public set budget(value: Budget) {
        this._budget = value;
    }

    public get guestList(): Array<Guest> {
        return this._guestList;
    }
    public set guestList(value: Array<Guest>) {
        this._guestList = value;
    }


}
