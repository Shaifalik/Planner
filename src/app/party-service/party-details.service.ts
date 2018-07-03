import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventDetails } from '../party-pojo/event-details';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PartyDetailsService {
  private eventDetailsObject = new EventDetails();
  private eventDetails = new BehaviorSubject<EventDetails>(this.eventDetailsObject);
  cast = this.eventDetails.asObservable();

  constructor(private http: Http) { }

  editEventDetails(eventUpdatedDetails) {
    this.eventDetails.next(eventUpdatedDetails);
  }

  postEventDetailData(model: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8081/rest/createEvent', JSON.stringify(model), options).map((response: Response) => response.text());
  }

}
