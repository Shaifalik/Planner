import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from '../party-service/party-details.service';
import { EventDetails } from '../party-pojo/event-details';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-party-nav-bar',
  templateUrl: './party-nav-bar.component.html',
  styleUrls: ['./party-nav-bar.component.css']
})
export class PartyNavBarComponent implements OnInit {
  data: string;
  id: number;
  visible: any;
  private sub: any;
  eventDetailsObject: EventDetails;

  constructor(private route: ActivatedRoute, private service: PartyDetailsService,private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.visible = 2;
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  onSubmit() {
    this.service.postEventDetailData(this.eventDetailsObject).subscribe((response) => {
      this.data = response;
    })
    //eventForm.reset();
    console.log("submit");
    //this.router.navigateByUrl("/login");
  }
}

