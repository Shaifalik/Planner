import { Component, OnInit } from '@angular/core';
import { Event } from '../party-pojo/event';
import { NgForm } from '@angular/forms';
import { CreatepartyService } from '../party-service/createparty.service';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './createparty-page.component.html',
  styleUrls: ['./createparty-page.component.css'],
  providers: [CreatepartyService]
})
export class CreatepartyPageComponent {
  newEvent: Event;

  constructor(private service: CreatepartyService) { }

  onSubmit(newEventForm: NgForm) {
    this.service.setEventObject(newEventForm.value);
    console.log("event data submitted");
  }

}
