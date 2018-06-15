import { Food } from "./food";
import { Location } from "./location";
import { Budget } from "./budget";
import { Guestlist } from "./guestlist";
import { Event } from '../party-pojo/event';

export class EventDetails {
    event: Event;
    foodList: Array<Food>;
   // location_list: Array<Location>;
    //guest_list: Guestlist;
    //event_budget: Budget;

    constructor(event:Event,foodList:Array<Food>){

    }

   // constructor(event: Event, food_list: Array<Food>, location_list: Array<Location>, guest_list: Guestlist, event_budget: Budget) {
    //}
}
