import { Component, OnInit } from '@angular/core';
import { LoginPageService } from '../login-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginPageService]
})
export class LoginPageComponent implements OnInit {
  private events;
  private pageCount;

  constructor(service:LoginPageService,private router: Router) { 
    this.events=service.getEvents();
    this.pageCount = service.getPaginationCount(this.events);
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
