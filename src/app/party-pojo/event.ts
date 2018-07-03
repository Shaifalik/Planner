import { Injectable } from '@angular/core';
import { Food } from './food';
import { Location } from './location';

@Injectable()
export class Event {
    eventName: string;
    eventDesc: string;
    eventDate: Date;

    constructor(event_name: string, event_description: string, event_date: Date) {
        this.eventName = event_name;
        this.eventDate = event_date;
        this.eventDesc = event_description;
    }
}
