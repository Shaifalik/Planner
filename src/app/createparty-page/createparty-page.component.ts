import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { FoodService } from '../food-page.service';
import { Food } from '../food';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './createparty-page.component.html',
  styleUrls: ['./createparty-page.component.css'],
  providers: [FoodService]
})
export class CreatepartyPageComponent implements OnInit {
  newEventForm: Events;
  foodItemsList: Food[];

  constructor(service: FoodService) {
    this.foodItemsList = service.getFoodItems();
  }

  ngOnInit() {

  }

  onSubmit(form) {
    this.newEventForm = form;
    form.reset();
  }

}
