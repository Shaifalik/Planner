import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginPageService } from '../party-service/login-page.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css'],
  providers: [LoginPageService]
})
export class OverviewPageComponent implements OnInit {
  id: number;
  private sub: any;
  private events;
  private currentEvent;

  constructor(service:LoginPageService, private route:ActivatedRoute) {
    this.events = service.getEvents();
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.currentEvent = this.events[this.findIndexInData(this.events, "event_id", this.id)]
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
