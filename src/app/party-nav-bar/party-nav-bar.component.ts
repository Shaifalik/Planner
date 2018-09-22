import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from '../services/party-details.service';
import { EventDetails } from '../pojos/event-details';
import { BudgetCategory } from '../pojos/budget-category';
import { OverviewPageService } from '../services/overview-page.service';
import { NgForm } from '@angular/forms';

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
      this.initializeData();
      this.visible = 2;
    });
  }

  initializeData() {
    // Update Event Case
    if (!isNaN(this.id)) {
      this.overviewService.getEventById(this.id).subscribe((result) => {
        let eventData = new EventDetails();
        eventData = result;
        this.service.editEventDetails(eventData);
        this.service.isFoodPageSaved = true;
        this.service.isBudgetPageSaved = true;
        this.service.isEventPageSaved = true;
        this.service.isGuestPageSaved = true;
        this.service.isLocPageSaved = true;
        this.enabledSubmitButton = 5;
        this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
      });
    }
    // New Event Creation Case
    else {
      this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
      this.service.isFoodPageSaved = false;
      this.service.isBudgetPageSaved = false;
      this.service.isEventPageSaved = false;
      this.service.isGuestPageSaved = false;
      this.service.isLocPageSaved = false;
    }
  }

  onSubmit(eventForm: NgForm) {
    this.service.postEventDetailData(this.eventDetailsObject).subscribe(
      result => {
        this.data = result;
        this.service.updateBudgetCategoryData(this.category).subscribe((response) => {
        });
        this.router.navigateByUrl("/eventplanner/eventsList");
      },
      error => {
        this.data = error;
        alert(this.data);
      }
    );
  }

  onUpdate() {
    this.service.updateEventDetailData(this.eventDetailsObject).subscribe(
      result => {
        this.data = result;
        this.service.updateBudgetCategoryData(this.category).subscribe((response) => {
        });
        this.router.navigateByUrl("/eventplanner/eventsList");
      },
      error => {
        this.data = error;
        alert(this.data);
      }
    );
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
  }

  onBackButton() {
    this.router.navigateByUrl("eventplanner/eventsList");
  }

}

