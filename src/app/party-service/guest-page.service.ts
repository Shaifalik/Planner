import { Injectable } from '@angular/core';
import { EventDetails } from '../party-pojo/event-details';
import { PartyDetailsService } from './party-details.service';
import { Guest } from '../party-pojo/guest';

@Injectable()
export class GuestPageService {
  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveGuestList(guestList: Array<Guest>) {
    this.eventDetailsObject.guestList = guestList;
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }

}
