import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from '../party-pojo/guest';
import { GuestPageService } from '../party-service/guest-page.service';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css'],
  providers: [GuestPageService]
})

export class GuestPageComponent implements OnInit {
  private guestList: Array<Guest>;
  model: Guest = new Guest("");
  isClickedOnce=false;

  constructor(private service: GuestPageService) { }

  ngOnInit(): void {
    this.guestList = [];
  }

  addNewGuest() {
    if (this.model.guestEmailId !== '') {
      this.guestList.push(new Guest(this.model.guestEmailId));
      this.model.guestEmailId = '';
    }
  }

  removeGuest(index: number) {
    this.guestList.splice(index, 1);
  }

  onSubmit(GuestListForm: NgForm) {
    this.service.saveGuestList(this.guestList);
    this.isClickedOnce=true;
  }

}
