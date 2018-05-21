import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { LocationPageService } from '../location-page.service';
import { Location } from '../location';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css'],
  providers: [LocationPageService]
})
export class LocationPageComponent implements OnInit {
  private locationList: Array<Location>;
  private eventLoc = '';
  private eventAdd = '';

  constructor(private service: LocationPageService) {
  }

  ngOnInit() {
    this.getAllLocations();
  }

  getAllLocations() {
    this.service.getLocations()
    .subscribe(
      response => this.locationList = response
    );
  }

  addNewLocation() {
    if (this.eventLoc !== '' && this.eventAdd !== '') {
      this.locationList.push(new Location(this.eventLoc, this.eventAdd));
      this.eventLoc = '';
      this.eventAdd = '';
    }
  }

  removeLocation(index: number) {
    this.locationList.splice(index, 1);
  }

  // Service requires on this i.e form needs to be passon to backend
  submitFoodList(Form: NgForm) {

  }

}
