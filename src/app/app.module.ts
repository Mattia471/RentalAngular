import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonCustomComponent } from './component/buttonCustom/button-custom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsersService } from './util/service/users/users.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './page/user-page/user-page.component';
import { CarPageComponent } from './page/car-page/car-page.component';
import { SlicePipe } from './util/pipes/pagination/slice.pipe';
import { CustomFormComponent } from './component/custom-form/custom-form.component';
import { PageFormComponent } from './page/page-form/page-form.component';
import { ReservationPageComponent } from './page/reservation-page/reservation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCustomComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
    SlicePipe,
    CarPageComponent,
    CustomFormComponent,
    PageFormComponent,
    ReservationPageComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [UsersService],//servizio
  bootstrap: [AppComponent]
})
export class AppModule { }
