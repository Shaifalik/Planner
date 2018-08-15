import { Component, OnInit } from '@angular/core';
import { Location } from '../pojos/location';
import { LocationPageService } from '../services/location-page.service';

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

  constructor(private service: LocationPageService) {
  }

  ngOnInit() {
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

  // Function to submit locations object to backend
  onLocationSubmit() {
    this.service.saveLocationList(this.locationList);
    this.isClickedOnce = true;
  }

}
