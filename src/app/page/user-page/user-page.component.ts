import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {UsersConfig} from "../../util/configCustom/table/usersConfig";
import {UsersService} from "../../util/service/users/users.service";
import {UsersModel} from "../../util/model/users";
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users!: UsersModel[];
  usersTable = UsersConfig;


  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  btnClicked($event:any){
    console.log($event)
  }

  //recuperp gli utenti dal servizio
  getUsers(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users
    });
  }




}
