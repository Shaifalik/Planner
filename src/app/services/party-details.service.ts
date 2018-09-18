import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EventDetails } from '../pojos/event-details';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Food } from '../pojos/food';
import { Event } from '../pojos/event';
import { Guest } from '../pojos/guest';
import { Location } from '../pojos/location';
import { BudgetCategory } from '../pojos/budget-category';
import { Observable } from 'rxjs/Observable';
import { Budget } from '../pojos/budget';
import { OverviewPageService } from './overview-page.service';
import { Router } from '@angular/router';

@Injectable()
export class PartyDetailsService {

  private eventDetailsObject = new EventDetails();
  private eventDetails = new BehaviorSubject<EventDetails>(this.eventDetailsObject);
  cast = this.eventDetails.asObservable();
  private tempEvent: Event;
  private _isFoodPageSaved: Boolean;
  private _isGuestPageSaved: Boolean;
  private _isLocPageSaved: Boolean;
  private _isEventPageSaved: Boolean;
  private _isBudgetPageSaved: Boolean;
  private budCtgy: BudgetCategory;
  private eventData: any;
  private id: number;

  constructor(private http: Http, private overviewService: OverviewPageService,private router: Router) {
  }

  //function to get the updated data on the event details object
  editEventDetails(eventUpdatedDetails) {
    this.eventDetails.next(eventUpdatedDetails);
  }

  setEventId(id: number) {
    this.id = id;
  }

  // function to post event data on db
  postEventDetailData(model: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8081/rest/createEvent', JSON.stringify(model), options).map((response: Response) => response.text());
  }

  //Update the data of Budget Category table
  updateBudgetCategoryData(budgetCategory: BudgetCategory): Observable<number> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8081/rest/updateBudgetCategoryData', JSON.stringify(budgetCategory))
      .map((response: Response) => {
        return response.status;
      });
  }

  //function to set the budgetCategory to share it with other components
  setBudgetCategory(bugCtgy: BudgetCategory) {
    this.budCtgy = bugCtgy;
  }

  getBudgetCategory(): BudgetCategory {
    return this.budCtgy;
  }

  // function to persist/edit data on Event Screen
  getStoredEventData(): Event {
    return this.tempEvent = new Event(this.eventDetails.value._eventName, this.eventDetails.value._eventDescription, this.eventDetails.value._eventDate);
  }

  // function to persist/edit data on Food Screen
  getStoredFoodList(): Array<Food> {
    return this.eventDetails.value._foodList;
  }

  // function to persist data on Guest Screen
  getTempGuestList(): Array<Guest> {
    return this.eventDetails.value._guestList;
  }

  // function to persist data on Location Screen
  getStoredLocationList(): Array<Location> {
    return this.eventDetails.value._locationList;
  }


  // function to persist data on Guest Screen
  getStoredBudgetList(): Budget {
    return this.eventDetails.value._budget;
  }

  //function to save the state of button action (like save)
  public get isFoodPageSaved(): Boolean {
    return this._isFoodPageSaved;
  }
  public set isFoodPageSaved(value: Boolean) {
    this._isFoodPageSaved = value;
  }

  //function to save the state of button action (like save)
  public get isEventPageSaved(): Boolean {
    return this._isEventPageSaved;
  }
  public set isEventPageSaved(value: Boolean) {
    this._isEventPageSaved = value;
  }

  //function to save the state of button action (like save)
  public get isGuestPageSaved(): Boolean {
    return this._isGuestPageSaved;
  }
  public set isGuestPageSaved(value: Boolean) {
    this._isGuestPageSaved = value;
  }

  //function to save the state of button action (like save)
  public get isLocPageSaved(): Boolean {
    return this._isLocPageSaved;
  }
  public set isLocPageSaved(value: Boolean) {
    this._isLocPageSaved = value;
  }

  //function to save the state of button action (like save)
  public get isBudgetPageSaved(): Boolean {
    return this._isBudgetPageSaved;
  }
  public set isBudgetPageSaved(value: Boolean) {
    this._isBudgetPageSaved = value;
  }

}
