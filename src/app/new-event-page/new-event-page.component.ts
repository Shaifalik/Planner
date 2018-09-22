import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../pojos/event';
import { NgForm } from '@angular/forms';
import { NewEventPageService } from '../services/new-event-page.service';
import { PartyDetailsService } from '../services/party-details.service';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.css'],
  providers: [NewEventPageService]
})

export class NewEventPageComponent {
  model: Event = new Event("", "", null);
  isPageSaved: Boolean;

  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: NewEventPageService, private mainService: PartyDetailsService) {

  }

  ngOnInit() {
    this.isPageSaved = this.mainService.isEventPageSaved;
    this.model = this.service.getTempStoredEventData();
    if(this.model._eventDesc==undefined){
      this.model._eventDesc="hey It’s been a while since we had some party so let’s have some fun."
    }
  }

  onEdit() {
    this.mainService.isEventPageSaved = false;
    this.isPageSaved = false;
    this.changeTab.emit(false);
  }

  //On Page Save and Continue
  onSubmit(newEventForm: NgForm) {
    this.service.saveEventData(newEventForm);
    this.mainService.isEventPageSaved = true;
    this.isPageSaved = true;
    this.changeTab.emit(true);
  }

}
