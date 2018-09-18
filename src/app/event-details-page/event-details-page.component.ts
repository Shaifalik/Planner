import { Component, OnInit } from '@angular/core';
import { EventDetails } from '../pojos/event-details';
import { OverviewPageService } from '../services/overview-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../pojos/location';

@Component({
  selector: 'app-event-details-page',
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.css'],
  providers: [OverviewPageService]
})
export class EventDetailsPageComponent implements OnInit {
  id: number;
  eventData: EventDetails;
  eventFoodList:Array<Location>;

  constructor(private service: OverviewPageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.service.getEventById(this.id).subscribe((result) => {
      this.eventData = result;
      this.eventFoodList = this.eventData.locationList;
    });
  }

  onBackButton() {
    this.router.navigateByUrl("eventplanner/eventsList");
  }

}
