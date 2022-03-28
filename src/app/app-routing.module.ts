import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserPageComponent} from "./page/user-page/user-page.component";
import {CarPageComponent} from "./page/car-page/car-page.component";
import {CustomFormComponent} from "./component/custom-form/custom-form.component";
import {PageFormComponent} from "./page/page-form/page-form.component";
import {ReservationPageComponent} from "./page/reservation-page/reservation-page.component";
import {PageFormReservationsComponent} from "./page/page-form-reservations/page-form-reservations.component";
import {LoginPageComponent} from "./page/login-page/login-page.component";

const routes: Routes = [
  {
    path : 'users',
    children:[
      {path : '', component: UserPageComponent},
      {path : 'edit/:obj/:class', component: PageFormComponent}, //mandare a form
      {path : 'add/:class', component: PageFormComponent}, //mandare a form
    ]
  },
  {
    path : 'cars',
    children:[
      {path : '', component: CarPageComponent},
      {path : 'edit/:obj/:class', component: PageFormComponent}, //mandare a form
      {path : 'add/:class', component: PageFormComponent}, //mandare a form
    ]
  },
  {
    path : 'reservations',
    children:[
      {path : '', component: ReservationPageComponent},
      {path : 'edit/:obj/:class', component: PageFormReservationsComponent}, //mandare a form
      {path : 'add/:class', component: PageFormReservationsComponent}, //mandare a form
    ]
  },
  {
    path : 'login',
    children:[
      {path : '', component: LoginPageComponent},
    ]
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)], //forRoot fornisce l'instradamento delle direttive in base all'url
  exports:[RouterModule] //disponibile in tutta l'applicazione
})
export class AppRoutingModule { }
