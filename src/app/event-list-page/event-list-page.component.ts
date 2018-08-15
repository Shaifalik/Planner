import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventListService } from '../services/event-list-page.service';
import { EventDetails } from '../pojos/event-details';

@Component({
  selector: 'app-login-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.css'],
  providers: [EventListService]
})
export class EventListComponent implements OnInit {
  private eventsData: Array<EventDetails>;
  private pageCount;

  constructor(service:EventListService,private router: Router) { 
    service.getEvents().subscribe((result) => { this.eventsData = result; });
    console.log(this.eventsData);
    //this.pageCount = service.getPaginationCount(this.events);
  }
  
  createPageCountArray(){
    //this.pageCount=Array(pageCount).fill().map((x,i)=>i);
  }

  ngOnInit() {
  }
  
  redirectToCreateParty() {
    this.router.navigateByUrl('/login/newParty');
  }
}
