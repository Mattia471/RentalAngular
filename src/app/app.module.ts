import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonCustomComponent } from './component/buttonCustom/button-custom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsersService } from './util/service/service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './util/service/in-memory-data.service';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { UserPageComponent } from './page/user-page/user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonCustomComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
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
