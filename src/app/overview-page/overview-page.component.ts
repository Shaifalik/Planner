import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventListService } from '../services/event-list-page.service';
import { OverviewPageService } from '../services/overview-page.service';
import { EventDetails } from '../pojos/event-details';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css'],
  providers: [EventListService]
})
export class OverviewPageComponent implements OnInit {
  id: number;
  private sub: any;
  private events;
  private currentEvent;
  private eventsData: Array<EventDetails>;

  constructor(private service:OverviewPageService, private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   //this.currentEvent = this.events[this.findIndexInData(this.events, "event_id", this.id)]
   this.service.getEventById(this.id).subscribe((result) => { this.eventsData = result; });
    console.log(this.eventsData);
  }

  findIndexInData(data, property, value) {
    for(var i = 0, l = data.length ; i < l ; i++) {
      if(data[i][property] === value) {
        return i;
      }
    }
    return -1;
  }

}
