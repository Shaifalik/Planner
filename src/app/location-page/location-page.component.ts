import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '../party-pojo/location';
import { LocationPageService } from '../party-service/location-page.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css'],
  providers: [LocationPageService]
})
export class LocationPageComponent implements OnInit {
  private locationList: Array<Location>;
  private details: String;
  private eventLoc = '';
  private eventAdd = '';

  constructor(private service: LocationPageService) {
  }

  ngOnInit() {
    this.locationList = [];
  }

  // Function to add locations object to LocationList on AddLocation Button
  addNewLocation() {
    if (this.eventLoc !== '' && this.eventAdd !== '') {
      this.locationList.push(new Location(this.eventLoc, this.eventAdd));
      this.eventLoc = '';
      this.eventAdd = '';
    }
  }

  // Function to remove locations object from LocationList on X Button
  removeLocation(index: number) {
    this.locationList.splice(index, 1);
  }

  // Function to submit locations object to backend
  onSubmit() {
    this.service.postLocationList(this.locationList).subscribe((response) => {
    this.details = response;
    }
    )
  }

  onEdit(){
    this.details="";
  }

  // Service extra to validate backend call
  getResponse() {
   this.service.getLocationDetails()
  .subscribe(
   response => this.details = response
  );
   }

}
