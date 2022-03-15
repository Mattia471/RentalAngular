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

@NgModule({
  declarations: [
    AppComponent,
    ButtonCustomComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [UsersService],//servizio
  bootstrap: [AppComponent]
})
export class AppModule { }
