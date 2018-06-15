import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageService } from '../party-service/login-page.service';

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
