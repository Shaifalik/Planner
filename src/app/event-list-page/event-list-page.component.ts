import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventListService } from '../services/event-list-page.service';
import { EventDetails } from '../pojos/event-details';
import { OverviewPageService } from '../services/overview-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.css'],
  providers: [EventListService]
})
export class EventListComponent implements OnInit {
  private eventsData: Array<EventDetails>;
  private pageCount;
  private sub: any;
  private id:number;
  eventGuestList: any;
  status: any;

  constructor(private service:EventListService,private router: Router) { 
  }

  ngOnInit(){}
  
  createPageCountArray(){
    //this.pageCount=Array(pageCount).fill().map((x,i)=>i);
  }
  
  redirectToCreateParty() {
    this.router.navigateByUrl('eventplanner/newEventCreation');
  }


  onEmailIcon(id:number){
    for(let event of this.eventsData){
      if(event._eventId===this.id){
        this.eventGuestList=event._guestList;
      }
    }
    this.service.sendEmailtoGuestList(this.eventGuestList).subscribe(result=>this.status=result);
    console.log(this.status);
  }
}
