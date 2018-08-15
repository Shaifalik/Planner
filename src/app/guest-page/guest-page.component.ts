import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from '../pojos/guest';
import { GuestPageService } from '../services/guest-page.service';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css'],
  providers: [GuestPageService]
})

export class GuestPageComponent implements OnInit {
  private guestList: Array<Guest>;
  model: Guest = new Guest("");
  isClickedOnce = false;
  private storedGuestList: Array<Guest>;

  constructor(private service: GuestPageService) { }

  ngOnInit(): void {
    this.guestList = this.service.getTempStoredGuestList();
    if (this.guestList == undefined) {
      this.guestList = [];
    }
    // To display the available Guest List
    this.service.getAvailableGuestList().subscribe((result) => { this.storedGuestList = result; });
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
    this.isClickedOnce = true;
  }

}
