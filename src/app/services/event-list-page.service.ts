import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventDetails } from '../pojos/event-details';

@Injectable()
export class EventListService {
  private events;
  private pageCount = 0;

  constructor(private http: Http) {
  }
  getEvents(): Observable<Array<EventDetails>>  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8081/rest/events',options)
       .map((res:Response) =>{
         return <Array<EventDetails>>(res.json())
       });
  }

  getAllEvents() {
    return this.events = [
      {
        event_id: 1,
        event_name: 'Jitendras Party',
        event_date: 'Event Date-10/12/2018',
        event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come.'
      },
      {
        event_id: 2,
        event_name: 'Mahesh Party',
        event_date: 'Event Date-10/12/2018',
        event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come.'
      },
      {
        event_id: 3,
        event_name: 'Suresh Party',
        event_date: 'Event Date-10/12/2018',
        event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come.'
      }
    ];
  }

  getPaginationCount(array: Array<Event>) {
    this.pageCount = array.length / 3;
    this.pageCount = this.pageCount + array.length % 3;
    return new Array(this.pageCount);
  }
}
