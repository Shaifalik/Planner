import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { NgDatepickerModule } from 'ng2-datepicker';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigatorBarComponent } from './navigator-bar/navigator-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatepartyPageComponent } from './createparty-page/createparty-page.component';
import { PartyNavBarComponent } from './party-nav-bar/party-nav-bar.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { CreatepartyService } from './party-service/createparty.service';
import { PartyDetailsService } from './party-service/party-details.service';
import { FoodPageService } from './party-service/food-page.service';
import { GuestPageComponent } from './guest-page/guest-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorBarComponent,
    HomePageComponent,
    LoginPageComponent,
    CreatepartyPageComponent,
    PartyNavBarComponent,
    FoodPageComponent,
    OverviewPageComponent,
    ShowErrorsComponent,
    LocationPageComponent,
    BudgetPageComponent,
    GuestPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDatepickerModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home',pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'login/newParty', component: PartyNavBarComponent},
      {path: 'login/partyDetail/:id', component: PartyNavBarComponent},
      {path: 'login/partyDetail/:id/overview', component: OverviewPageComponent}
    ])
  ],
  providers: [PartyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
