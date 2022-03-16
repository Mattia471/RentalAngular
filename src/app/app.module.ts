import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonCustomComponent } from './button-custom/button-custom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersService } from './service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {SearchPipe} from "./pipe/search.pipe";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ButtonCustomComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],//servizio
  bootstrap: [AppComponent]
})
export class AppModule { }
