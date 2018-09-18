import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from '../services/party-details.service';
import { EventDetails } from '../pojos/event-details';
import { BudgetCategory } from '../pojos/budget-category';
import { OverviewPageService } from '../services/overview-page.service';

@Component({
  selector: 'app-party-nav-bar',
  templateUrl: './party-nav-bar.component.html',
  styleUrls: ['./party-nav-bar.component.css']
})
export class PartyNavBarComponent implements OnInit {
  data: string;
  id: number;
  visible: number;
  private sub: any;
  eventDetailsObject: EventDetails;
  enabledSubmitButton: number;
  category: BudgetCategory;

  constructor(private route: ActivatedRoute, private service: PartyDetailsService, private overviewService: OverviewPageService, private router: Router) {
    this.enabledSubmitButton = 0;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id != undefined) {// In case of Update Event
        this.overviewService.getEventById(this.id).subscribe((result) => {
          let eventData = new EventDetails();
          eventData = result;
          this.service.editEventDetails(eventData);
        });
      }
      this.visible = 2;
      this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
    });
  }

  onSubmit() {
    this.service.postEventDetailData(this.eventDetailsObject).subscribe((response) => {
      this.data = response;
      alert(this.data);
    })
    this.service.updateBudgetCategoryData(this.category).subscribe((response) => {
    })
    this.router.navigateByUrl("/login");
  }

  onChangeTab(event) {
    if (event) {
      this.enabledSubmitButton = this.enabledSubmitButton + 1;
    }
    else {
      this.enabledSubmitButton = this.enabledSubmitButton - 1;
    }
  }

  setBudgetCategory(event) {
    this.category = event;
    this.service.setBudgetCategory(this.category);
  }

  onBackButton() {
    this.router.navigateByUrl("eventplanner/eventsList");
  }

}

