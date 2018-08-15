import { Injectable, OnInit } from '@angular/core';
import { Food } from '../pojos/food';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../pojos/event-details';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodPageService {
  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService, private http: Http) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveFoodList(foodList: Array<Food>) {
    this.eventDetailsObject.foodList = foodList;
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }

  getTemporaryFoodList(): Array<Food> {
    return this.service.getStoredFoodList();
  }

  getAvailableFoodList(): Observable<Array<Food>> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://localhost:8081/rest/fetchFoodList', options)
      .map((response: Response) => {
        console.log(response.json());
        return <Array<Food>>response.json()
      });
  }

  getEventFoodList(): Array<Food> {
    return this.eventDetailsObject.foodList
  }
}
