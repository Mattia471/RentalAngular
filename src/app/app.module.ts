import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonCustomComponent } from './component/buttonCustom/button-custom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './page/user-page/user-page.component';
import { CarPageComponent } from './page/car-page/car-page.component';
import { SlicePipe } from './util/pipes/pagination/slice.pipe';
import { CustomFormComponent } from './component/custom-form/custom-form.component';
import { PageFormComponent } from './page/page-form/page-form.component';
import { PageFormReservationsComponent } from './page/page-form-reservations/page-form-reservations.component';
import { ReservationPageComponent } from './page/reservation-page/reservation-page.component';
import { CustomFormReservationsComponent } from './component/custom-form-reservations/custom-form-reservations.component';
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {TokenInterceptor} from "./util/service/authentication/token-interceptor.service";
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
    CustomFormReservationsComponent,
    PageFormReservationsComponent,
    LoginPageComponent
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
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }],//servizio
  bootstrap: [AppComponent]
})
export class AppModule { }
