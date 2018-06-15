import { Injectable } from '@angular/core';
import { Food } from '../party-pojo/food';

@Injectable()
export class LoginPageService {
  private events;
  private pageCount = 0;

  constructor() {
  }

  getEvents() {
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
