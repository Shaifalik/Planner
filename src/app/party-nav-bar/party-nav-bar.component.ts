import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-party-nav-bar',
  templateUrl: './party-nav-bar.component.html',
  styleUrls: ['./party-nav-bar.component.css'],
})


export class PartyNavBarComponent implements OnInit {
  id: number;
  visible: any;
  private sub: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.visible = 2;
  }
  

}