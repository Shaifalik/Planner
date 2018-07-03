import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Location } from '../party-pojo/Location';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../party-pojo/event-details';

@Injectable()
export class LocationPageService {

  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService){ 
  this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveLocationList(LocationList:Array<Location>){
    this.eventDetailsObject.locationList=LocationList;
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }

}
