import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Location } from '../pojos/location';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../pojos/event-details';

@Injectable()
export class LocationPageService {
  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService,private http:Http) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveLocationList(LocationList: Array<Location>) {
    this.eventDetailsObject._locationList = LocationList;
    this.service.editEventDetails(this.eventDetailsObject);
  }

  // function to post event data on db
  getStoredTempLocationList(): Array<Location> {
    return this.service.getStoredLocationList();
  }

  getAvailableLocationList():Observable<Array<string>>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://localhost:8081/rest/fetchLocationList', options)
      .map((response: Response) => {
        return <Array<string>>response.json()
      });
  }
}
