import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventListService } from '../services/event-list-page.service';
import { EventDetails } from '../pojos/event-details';
import { OverviewPageService } from '../services/overview-page.service';
import { PartyDetailsService } from '../services/party-details.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.css'],
  providers: [EventListService]
})
export class EventListComponent implements OnInit {
  private eventsData: Array<EventDetails>;
  private eventDetailsObject = new EventDetails();
  private eventGuestList: any;
  private status: any;

  constructor(private service:EventListService,private mainService:PartyDetailsService,private router: Router) { 
  }

  ngOnInit(){
    this.service.getEvents().subscribe((result) => { this.eventsData = result; });
  }
  
  createPageCountArray(){
    //this.pageCount=Array(pageCount).fill().map((x,i)=>i);
  }
  
  redirectToCreateParty() {
    this.mainService.createnewEventDetails(this.eventDetailsObject);
    this.router.navigateByUrl('eventplanner/newEventCreation');
  }


  onEmailIcon(id:number){
    for(let event of this.eventsData){
      if(event._eventId===id){
        this.eventGuestList=event._guestList;
      }
    }
    this.service.sendEmailtoGuestList(this.eventGuestList).subscribe((result)=>{
      this.status=result;
      alert(this.status);
    });
  }
}
