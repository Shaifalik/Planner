import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventDetails } from '../pojos/event-details';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Food } from '../pojos/food';
import { Event } from '../pojos/event';
import { Guest } from '../pojos/guest';
import { Location } from '../pojos/location';

@Injectable()
export class PartyDetailsService {
  private eventDetailsObject = new EventDetails();
  private eventDetails = new BehaviorSubject<EventDetails>(this.eventDetailsObject);
  cast = this.eventDetails.asObservable();
  private tempEvent: Event;

  constructor(private http: Http) { }

  //function to get the updated data on the event details object
  editEventDetails(eventUpdatedDetails) {
    this.eventDetails.next(eventUpdatedDetails);
  }

  // function to post event data on db
  postEventDetailData(model: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8081/rest/createEvent', JSON.stringify(model), options).map((response: Response) => response.text());
  }

  // function to persist data on Event Screen
  getStoredEventData(): Event {
    return this.tempEvent = new Event(this.eventDetails.value.eventName, this.eventDetails.value.eventDescription, this.eventDetails.value.eventDate);
  }

  // function to persist data on Food Screen
  getStoredFoodList(): Array<Food> {
    return this.eventDetails.value.foodList;
  }

  // function to persist data on Guest Screen
  getStoredGuestList(): Array<Guest> {
    return this.eventDetails.value.guestList;
  }

  // function to persist data on Location Screen
  getStoredLocationList(): Array<Location> {
    return this.eventDetails.value.locationList;
  }

}
