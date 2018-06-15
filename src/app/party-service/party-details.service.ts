import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Event } from '../party-pojo/event';
import { EventDetails } from '../party-pojo/event-details';
import { FoodListService } from './food-page.service';
import { CreatepartyService } from './createparty.service';

@Injectable()
export class PartyDetailsService {
  event:Event;
  eventDetails: EventDetails;

  constructor(private http: Http, private foodService: FoodListService, private eventService: CreatepartyService) { }

  //Convert the EventDetail object to JSON
  createEventDetailObject() {
    console.log(this.eventService.getEventObject());
    console.log(JSON.stringify(new EventDetails(this.eventService.getEventObject(), this.foodService.getFoodObject())));
    return JSON.stringify(this.eventDetails);
  }

  postEventData(model: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:18080/createEvent', model,options).map((response: Response) => response.text());
  }

}
