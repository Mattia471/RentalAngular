import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserPageComponent} from "./page/user-page/user-page.component";
import {CarPageComponent} from "./page/car-page/car-page.component";
import {PageFormComponent} from "./page/page-form/page-form.component";
import {ReservationPageComponent} from "./page/reservation-page/reservation-page.component";
import {PageFormReservationsComponent} from "./page/page-form-reservations/page-form-reservations.component";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {UserGuard} from "./util/service/authentication/basic-guard.service";
import {AdminGuard} from "./util/service/authentication/admin-guard.service";
import {ProfilePageComponent} from "./page/profile-page/profile-page.component";

const routes: Routes = [
  {
    path : 'users', canActivate: [AdminGuard], //routecanLoad: [AdminGuard], //figli
    children:[
      {path : '', component: UserPageComponent},
      {path : 'edit/:obj/:class', component: PageFormComponent}, //mandare a form
      {path : 'add/:class', component: PageFormComponent}, //mandare a form
    ]
  },
  {
    path : 'cars', canActivate: [UserGuard], canLoad: [AdminGuard],
    children:[
      {path : '', component: CarPageComponent},
      {path : 'edit/:obj/:class', component: PageFormComponent}, //mandare a form
      {path : 'add/:class', component: PageFormComponent}, //mandare a form
    ]
  },
  {
    path : 'reservations', canActivate: [UserGuard], canLoad: [AdminGuard],
    children:[
      {path : '', component: ReservationPageComponent},
      {path : 'edit/:obj/:class', component: PageFormReservationsComponent}, //mandare a form
      {path : 'add/:class', component: PageFormReservationsComponent},
    ]
  },
  {
    path : 'profile', canActivate: [UserGuard],
    children:[
      {path : '', component: ProfilePageComponent},
    ]
  },
  {
    path : 'login', canActivate: [UserGuard],
    children:[
      {path : '', component: LoginPageComponent},
    ]
  },
  {
    path : 'logout',
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
