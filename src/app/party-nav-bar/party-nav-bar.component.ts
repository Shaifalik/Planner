import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyDetailsService } from '../party-service/party-details.service';

@Component({
  selector: 'app-party-nav-bar',
  templateUrl: './party-nav-bar.component.html',
  styleUrls: ['./party-nav-bar.component.css'],
  providers: [PartyDetailsService]
})

export class PartyNavBarComponent implements OnInit {
  data: string;
  id: number;
  visible: any;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: PartyDetailsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.visible = 2;
  }

  submitPartyDetails() {
    console.log("Event Details submitted");
    this.service.postEventData(this.service.createEventDetailObject()).subscribe((response) => {
      this.data = response;
    })
    console.log(this.data);
  }
}

