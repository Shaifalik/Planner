import { Injectable } from '@angular/core';
import { EventDetails } from '../pojos/event-details';
import { PartyDetailsService } from './party-details.service';
import { Guest } from '../pojos/guest';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GuestPageService {
  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService,private http:Http) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveGuestList(guestList: Array<Guest>) {
    this.eventDetailsObject.guestList = guestList;
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }

  // function to display the temp guest list on screen
  getTempStoredGuestList(): Array<Guest> {
    return this.service.getStoredGuestList();
  }

  getAvailableGuestList():Observable<Array<Guest>>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://localhost:8081/rest/fetchGuestList', options)
      .map((response: Response) => {
        console.log(response.json());
        return <Array<Guest>>response.json()
      });
  }

}
