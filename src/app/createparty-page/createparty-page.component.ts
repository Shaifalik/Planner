import { Component, OnInit } from '@angular/core';
import {Events} from '../events';

@Component({
  selector: 'app-createparty-page',
  templateUrl: './createparty-page.component.html',
  styleUrls: ['./createparty-page.component.css']
})
export class CreatepartyPageComponent implements OnInit {
  newEventForm:Events;

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form){
    this.newEventForm=form;
    form.reset();
  }

}
