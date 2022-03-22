import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserPageComponent} from "./page/user-page/user-page.component";
import {CarPageComponent} from "./page/car-page/car-page.component";


const routes: Routes = [
  {
    path : 'users',
    component: UserPageComponent
  },
  {
    path : 'cars',
    component: CarPageComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)], //forRoot fornisce l'instradamento delle direttive in base all'url
  exports:[RouterModule] //disponibile in tutta l'applicazione
})
export class AppRoutingModule { }
