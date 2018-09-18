import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from '../pojos/location';
import { LocationPageService } from '../services/location-page.service';
import { PartyDetailsService } from '../services/party-details.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css'],
  providers: [LocationPageService]
})
export class LocationPageComponent implements OnInit {
  private locationList: Array<Location>;
  model: Location = new Location("", "");
  isClickedOnce = false;
  private storedLocationList: Array<Location>;
  private isPageSaved: Boolean;

  
  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: LocationPageService,private mainService: PartyDetailsService) {
  }

  ngOnInit() {
    this.isPageSaved = this.mainService.isLocPageSaved;
    this.locationList = this.service.getStoredTempLocationList();
    if (this.locationList == undefined) {
      this.locationList = [];
    }
    this.service.getAvailableLocationList().subscribe((result) => { this.storedLocationList = result; });
  }

  // Function to add locations object to LocationList on AddLocation Button
  addNewLocation() {
    if (this.model.eventLocation !== '' && this.model.eventAddress !== '') {
      this.locationList.push(new Location(this.model.eventLocation, this.model.eventAddress));
      this.model.eventLocation = '';
      this.model.eventAddress = '';
    }
  }

  // Function to remove locations object from LocationList on X Button
  removeLocation(index: number) {
    this.locationList.splice(index, 1);
  }

  onEdit() {
    this.mainService.isLocPageSaved = false;
    this.isPageSaved = false;
    this.changeTab.emit(false);
  }

  // Function to submit locations object to backend
  onLocationSubmit(newLocationForm:NgForm) {
    this.service.saveLocationList(this.locationList);
    this.mainService.isLocPageSaved = true;
    this.isPageSaved = true;
    this.changeTab.emit(true);// Submit enabled
    newLocationForm.reset();
  }

}
