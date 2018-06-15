import { Injectable } from '@angular/core';
import { Event } from '../party-pojo/event';

@Injectable()
export class CreatepartyService {
  newEvent: Event;

  constructor() {
    this.newEvent=null;
   }

  setEventObject(newEvent: Event) {
    this.newEvent = newEvent;
    if( this.newEvent==undefined){
      console.log("Undefined");
    }
  }

  getEventObject() {
    return this.newEvent;
  }

}
