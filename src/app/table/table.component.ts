import {Component, Input, OnInit} from '@angular/core';
import {MyArray, MyHeaders, MyTableConfig} from "../config-template/table/config";
import {UsersService} from "../service.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //creazione oggetto servizio
  users: MyArray[]=[];

  @Input () tableConfig !: MyTableConfig ;

  constructor(private service: UsersService) { }

  //recuper gli utenti dal servizio
  getUsers(): void{
    this.service.getUsers().subscribe(next => this.users=next);
  }

  ngOnInit(): void {
    this.getUsers();
  }


}
