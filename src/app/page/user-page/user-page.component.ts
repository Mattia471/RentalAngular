import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {UsersConfig} from "../../util/configCustom/table/usersConfig";
import {UsersService} from "../../util/service/users/users.service";
import {UsersModel} from "../../util/model/users";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users!: UsersModel[];
  usersTable = UsersConfig;


  constructor(
    private service: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  btnClicked($event:any){
    switch ($event.action){
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.route});
        break;
      case 'edit':
        this.router.navigate(['edit'], {relativeTo: this.route});
        break;
      case 'delete':
        this.router.navigate(['delete'], {relativeTo: this.route});
        break;
    }
  }

  //recuperp gli utenti dal servizio
  getUsers(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users
    });
  }




}
