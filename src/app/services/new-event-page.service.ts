import { Injectable } from '@angular/core';
import { Event } from '../pojos/event';
import { EventDetails } from '../pojos/event-details';
import { PartyDetailsService } from './party-details.service';
import { NgForm } from '@angular/forms';

@Injectable()
export class NewEventPageService {
  private eventDetailsObject: EventDetails;
  private newEvent: Event;

  constructor(private service: PartyDetailsService) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveEventData(newEventForm: NgForm) {
    this.newEvent = newEventForm.value;
    this.eventDetailsObject.setEvent(this.newEvent);
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }

  getTempStoredEventData():Event{
    return this.service.getStoredEventData();
  }

}
