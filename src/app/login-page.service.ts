import { Injectable } from '@angular/core';
import { Events } from './events';

@Injectable()
export class LoginPageService {
  private events;
  private pageCount:number=0;
  

  constructor() { 
  }

  getEvents(){
    return this.events= [
      {
          event_name: 'Jitendras Party',
          event_date: 'Event Date-10/12/2018',
          event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come. I really had so much fun with you. The food was fabulous and yummy, wines were outstanding. Thank you. '
      },
      {
        event_name: 'Mahesh Party',
        event_date: 'Event Date-10/12/2018',
        event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come. I really had so much fun with you. The food was fabulous and yummy, wines were outstanding. Thank you. '
      },
      {
        event_name: 'Suresh Party',
        event_date: 'Event Date-10/12/2018',
        event_description: 'Thank you very much for the dinner last night! Thank you because you invited me to come. I really had so much fun with you. The food was fabulous and yummy, wines were outstanding. Thank you. '
      }
    ];
  }

  getPaginationCount(array:Array<Events>){
      this.pageCount= array.length/3;
      this.pageCount=this.pageCount+array.length%3;
      return new Array(this.pageCount);
      }
    }