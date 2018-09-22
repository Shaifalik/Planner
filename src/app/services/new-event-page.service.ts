import { Injectable } from '@angular/core';
import { Event } from '../pojos/event';
import { EventDetails } from '../pojos/event-details';
import { PartyDetailsService } from './party-details.service';
import { NgForm } from '@angular/forms';

@Injectable()
export class NewEventPageService {
  eventDetailsObject = new EventDetails();
  newEvent: Event;
  isSaved: Boolean;

  constructor(private service: PartyDetailsService) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveEventData(newEventForm: NgForm) {
    this.newEvent = newEventForm.value;
    this.eventDetailsObject._eventName=this.newEvent.eventName;
    this.eventDetailsObject._eventDescription=this.newEvent.eventDesc;
    this.eventDetailsObject._eventDate=this.newEvent.eventDate;
    this.service.editEventDetails(this.eventDetailsObject);
  }

  getTempStoredEventData(): Event {
    return this.service.getStoredEventData();
  }

  setPageSaved(isSaved: Boolean) {
    this.isSaved = isSaved;
  }

  getPageSaved() {
    return this.isSaved;
  }

}
