import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigatorBarComponent } from './navigator-bar/navigator-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatepartyPageComponent } from './createparty-page/createparty-page.component';
import { PartyNavBarComponent } from './party-nav-bar/party-nav-bar.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorBarComponent,
    HomePageComponent,
    LoginPageComponent,
    CreatepartyPageComponent,
    PartyNavBarComponent,
    FoodPageComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomePageComponent},
      {path:'login', component:LoginPageComponent},
      {path:'login/newParty',component:CreatepartyPageComponent},
      {path:'login/partyDetail/:id', component:PartyNavBarComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
