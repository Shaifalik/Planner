import { Injectable } from '@angular/core';
import { Food } from './food';
import { Location } from './location';

@Injectable()
export class Event {

    constructor(private event_name: string, private event_description: string, private event_date: DateTimeFormat) {

    }
}
