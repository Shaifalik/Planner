import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyDetailsService } from '../services/party-details.service';
import { EventDetails } from '../pojos/event-details';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-party-nav-bar',
  templateUrl: './party-nav-bar.component.html',
  styleUrls: ['./party-nav-bar.component.css']
})
export class PartyNavBarComponent implements OnInit {
  data: string;
  id: number;
  visible: number;
  private sub: any;
  eventDetailsObject: EventDetails;

  constructor(private route: ActivatedRoute, private service: PartyDetailsService,private router: Router,private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.visible = 2;
    this.service.cast.subscribe(eventDetails => this.eventDetailsObject = eventDetails);
  }

  onSubmit() {
    this.service.postEventDetailData(this.eventDetailsObject).subscribe((response) => {
      this.data = response;
      alert(this.data);
    })
    //this.router.navigateByUrl("/login");
  }

  onChangeTab(event){
    console.log(this.visible);
    this.visible=event;
  }

  onBackButton(){
    this.location.back();
  }


}

