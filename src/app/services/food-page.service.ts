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

  getStoredList(){
    return this.service.getStoredFoodList();
  }

  saveFoodList(foodList: Array<Food>) {
    this.eventDetailsObject.foodList = foodList;
    this.service.editEventDetails(this.eventDetailsObject);
  }

  //function to fetch the food items stored in database
  getAvailableFoodList(): Observable<Array<Food>> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://localhost:8081/rest/fetchFoodList', options)
      .map((response: Response) => {
        return <Array<Food>>response.json()
      });
  }

}
