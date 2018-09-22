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
  // Used for Unique Param Validators
  private guestEmailIdsList: Array<String>;
  private model: Guest = new Guest("");
  private isPageSaved: Boolean;
  dbGuestList: Array<Guest>;
  allowValidation: boolean;

  @Output()
  changeTab: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: GuestPageService, private mainService: PartyDetailsService) { }

  ngOnInit(): void {
    //To display the temporary stored data and also on edit button.
    this.guestList = this.mainService.getTempGuestList();
    if (this.guestList == undefined) {
      this.guestList = [];
    }

    this.isPageSaved = this.mainService.isGuestPageSaved;

    if (this.guestEmailIdsList == undefined) {
      this.guestEmailIdsList = [];
    }
    // To show Drop down list of GuestList
    this.service.getAvailableGuestList().subscribe((result) => { this.dbGuestList = result; });
  }

  addNewGuest(GuestListForm:NgForm) {
    this.allowValidation = true;
    if (this.model.guestEmailId !== '' && GuestListForm.valid) {
      this.guestList.push(new Guest(this.model.guestEmailId.toLowerCase()));
      this.guestEmailIdsList.push(this.model.guestEmailId.toLowerCase());
      this.model.guestEmailId = '';
      this.allowValidation = false;
    }
  }

  removeGuest(index: number,guestListForm:NgForm) {
    this.guestList.splice(index, 1);
    this.guestEmailIdsList.splice(index,1);
    guestListForm.reset();
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
