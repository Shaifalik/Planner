import { Injectable, OnInit } from '@angular/core';
import { Food } from '../party-pojo/food';
import { PartyDetailsService } from './party-details.service';
import { EventDetails } from '../party-pojo/event-details';

@Injectable()
export class FoodPageService {
  private eventDetailsObject: EventDetails;

  constructor(private service: PartyDetailsService) {
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  saveFoodList(foodList: Array<Food>) {
    this.eventDetailsObject.foodList = foodList;
    this.service.editEventDetails(this.eventDetailsObject);
    console.log(this.eventDetailsObject);
  }




}
