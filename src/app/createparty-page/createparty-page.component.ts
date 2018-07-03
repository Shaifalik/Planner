import { Component, OnInit } from '@angular/core';
import { Event } from '../party-pojo/event';
import { NgForm } from '@angular/forms';
import { EventDetails } from '../party-pojo/event-details';
import { PartyDetailsService } from '../party-service/party-details.service';
import { CreatepartyService } from '../party-service/createparty.service';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './createparty-page.component.html',
  styleUrls: ['./createparty-page.component.css'],
  providers: [CreatepartyService]
})

export class CreatepartyPageComponent {
  model: Event = new Event("", "", null);
  isClickedOnce=false;

  constructor(private service: CreatepartyService) { }

  ngOnInit() {
  }

  //On Page Save and Continue
  onSubmit(newEventForm: NgForm) {
    this.service.saveEventData(newEventForm);
    this.isClickedOnce=true;
  }

}
