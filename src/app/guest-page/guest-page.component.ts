import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from '../pojos/guest';
import { GuestPageService } from '../services/guest-page.service';
import { PartyDetailsService } from '../services/party-details.service';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrls: ['./guest-page.component.css'],
  providers: [GuestPageService]
})

export class GuestPageComponent implements OnInit {
  private guestList: Array<Guest>;
  private model: Guest = new Guest("");
  private isPageSaved: Boolean;
  private storedGuestList: Array<Guest>;
  private ItemFieldIsEmpty: boolean;

  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: GuestPageService, private mainService: PartyDetailsService) { }

  ngOnInit(): void {
    //To display the temporary stored data and also on edit button.
    this.guestList = this.mainService.getTempGuestList();
    this.isPageSaved = this.mainService.isGuestPageSaved;
    if (this.guestList == undefined) {
      this.guestList = [];
    }
    // To show Drop down list of GuestList
    this.service.getAvailableGuestList().subscribe((result) => { this.storedGuestList = result; });
  }

  addNewGuest() {
    this.ItemFieldIsEmpty = true;
    if (this.model.guestEmailId !== '') {
      this.model.guestEmailId = this.model.guestEmailId.toLowerCase();
      this.guestList.push(new Guest(this.model.guestEmailId));
      this.model.guestEmailId = '';
      this.ItemFieldIsEmpty = false;
    }
  }

  removeGuest(index: number) {
    this.guestList.splice(index, 1);
  }

  onEdit() {
    this.mainService.isGuestPageSaved = false;
    this.isPageSaved = false;
    this.changeTab.emit(false);
  }

  onSubmit(guestListForm: NgForm) {
    this.mainService.isGuestPageSaved = true;
    this.isPageSaved = true;
    this.changeTab.emit(true);// Submit enabled
    this.service.saveGuestList(this.guestList);
    guestListForm.reset();
  }

}
