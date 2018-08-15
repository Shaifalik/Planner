import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../pojos/event';
import { NgForm } from '@angular/forms';
import { NewEventPageService } from '../services/new-event-page.service';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css'],
  providers: [NewEventPageService]
})

export class NewEventPageComponent {
  model: Event = new Event("", "", null);
  isClickedOnce = false;

  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  constructor(private service: NewEventPageService) { }

  ngOnInit() {
    this.model.eventDate = this.service.getTempStoredEventData().eventDate;
    this.model.eventDesc = this.service.getTempStoredEventData().eventDesc;
    this.model.eventName = this.service.getTempStoredEventData().eventName;
  }

  //On Page Save and Continue
  onSubmit(newEventForm: NgForm) {
    this.service.saveEventData(newEventForm);
    this.isClickedOnce = true;
    console.log("called");
    this.changeTab.emit(3);
  }

}
