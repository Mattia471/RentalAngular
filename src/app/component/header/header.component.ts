import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../../util/configCustom/table/config";
import {MyButtonConfig} from "../../util/configCustom/button/config";
import {AuthService} from "../../util/service/authentication/auth.service";
import {Router} from "@angular/router";
import {TokenStorageServiceService} from "../../util/service/authentication/token-storage-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private  router:Router, public tokenStorage: TokenStorageServiceService) { }

  ngOnInit(): void {

  }

  logout() {
    this.tokenStorage.logout();
    this.router.navigate(['/login']);
  }

}

