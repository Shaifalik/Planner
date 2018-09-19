import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventDetails } from '../pojos/event-details';
import { Guest } from '../pojos/guest';

@Injectable()
export class EventListService {
  private events;
  private pageCount = 0;

  constructor(private http: Http) {
  }
  getEvents(): Observable<Array<EventDetails>> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8081/rest/events', options)
      .map((res: Response) => {
        return <Array<EventDetails>>(res.json())
      });
  }

  sendEmailtoGuestList(guestList: Array<Guest>) :Observable<string>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/text');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8081/rest/sendEmail',guestList)
      .map((res: Response) => {
        return <string>(res.text());
      });
  }

  getPaginationCount(array: Array<Event>) {
    this.pageCount = array.length / 3;
    this.pageCount = this.pageCount + array.length % 3;
    return new Array(this.pageCount);
  }
}
