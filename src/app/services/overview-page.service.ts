import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { EventDetails } from '../pojos/event-details';

@Injectable()
export class OverviewPageService {
  private events;
  private pageCount = 0;

  constructor(private http: Http) {
  }
  getEventById(id): Observable<EventDetails> {
    id = parseInt(id);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8081/rest/event/' + id, options)
      .map((res: Response) => {
        return <EventDetails>(res.json())
      });
  }

  getPaginationCount(array: Array<Event>) {
    this.pageCount = array.length / 3;
    this.pageCount = this.pageCount + array.length % 3;
    return new Array(this.pageCount);
  }
}
