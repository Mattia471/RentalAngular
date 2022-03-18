import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./component/table/table.component";
import {RouterModule, Routes} from "@angular/router";
import {FinalTable} from "./util/configCustom/table/example-config";


const routes: Routes = [
  {
    path : 'users',
    component: TableComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)], //forRoot fornisce l'instradamento delle direttive in base all'url
  exports:[RouterModule] //disponibile in tutta l'applicazione
})
export class AppRoutingModule { }
