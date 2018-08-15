import { Injectable } from '@angular/core';
import { Food } from './food';
import { Location } from './location';

@Injectable()
export class Event {
    private _eventName: string;
    private _eventDesc: string;
    private _eventDate: Date;
    
    constructor(event_name: string, event_description: string, event_date: Date) {
        this.eventName = event_name;
        this.eventDate = event_date;
        this.eventDesc = event_description;
    }

    public get eventName(): string {
        return this._eventName;
    }
    public set eventName(value: string) {
        this._eventName = value;
    }

    public get eventDesc(): string {
        return this._eventDesc;
    }
    public set eventDesc(value: string) {
        this._eventDesc = value;
    }

    public get eventDate(): Date {
        return this._eventDate;
    }
    public set eventDate(value: Date) {
        this._eventDate = value;
    }
}
