import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { FoodService } from '../food-page.service';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './createparty-page.component.html',
  styleUrls: ['./createparty-page.component.css'],
  providers: [FoodService]
})
export class CreatepartyPageComponent implements OnInit {
  newEventForm: Events;

  constructor(service: FoodService) {
  }

  ngOnInit() {

  }

  onSubmit(form) {
    this.newEventForm = form;
  }

}
