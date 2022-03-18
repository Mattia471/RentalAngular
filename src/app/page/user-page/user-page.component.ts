import {Component, Input, OnInit} from '@angular/core';
import {MyArray, MyTableConfig} from "../../util/configCustom/table/config";
import {UsersConfig} from "../../util/configCustom/table/usersConfig";
import {UsersService} from "../../util/service/service.service";
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users!: MyArray[];
  usersTable = UsersConfig;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  //recuperp gli utenti dal servizio
  getUsers(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users
    });
  }
}
