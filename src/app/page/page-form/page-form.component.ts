import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isString} from "lodash";
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {UsersModel} from "../../util/model/users";
import {CarsModel} from "../../util/model/cars";
import * as moment from "moment";


@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  classItems!: any;
  itemContent!: any;

  data!:any[];
  keys!:any[];
  typeOfData:any[]=[];

  constructor(
    public route: ActivatedRoute,
    public usersService: UsersService,
    public carsService: CarsService
) { }

  ngOnInit(): void {
    this.getClass()
    this.getItem()
    if(this.itemContent) {
      this.getStructureAdd()
    }else{
      this.getStructureEdit()
    }
  }

  getClass(): void{
    this.classItems=this.route.snapshot.paramMap.get('class')
  }

  getItem(): void{
    this.itemContent=this.route.snapshot.paramMap.get('obj')
  }

  getStructureAdd(): void{
    switch (this.classItems){
      case 'users':
        this.usersService.getUserById(this.itemContent).subscribe(users => {
          this.data = users
          this.keys = Object.keys(this.data)
          //TODO
          //CREARE UN METODO
            for (let i = 0; i < this.keys.length; i++) {
              this.typeOfData[i] = typeof this.data[this.keys[i]];
              if (moment(this.data[this.keys[i]], "YYYY-MM-DD", true).isValid()) {
                this.typeOfData[i] = 'date';
              }
            }
        });
        break;
      case 'cars':
        this.carsService.getCarById(this.itemContent).subscribe(cars => {
          this.data = cars
          this.keys = Object.keys(this.data)

          for (let i = 0; i < this.keys.length; i++) {
            this.typeOfData[i] = typeof this.data[this.keys[i]];
            if (moment(this.data[this.keys[i]], "YYYY-MM-DD", true).isValid()) {
              this.typeOfData[i] = 'date';
            }
          }
        });
        break
    }

  }

  getStructureEdit(): void{
    switch (this.classItems){
      case 'users':
        this.usersService.getUserById(1).subscribe(users => {
          this.data = users
          this.keys = Object.keys(this.data)
          //TODO
          //CREARE UN METODO
          for (let i = 0; i < this.keys.length; i++) {
            this.typeOfData[i] = typeof this.data[this.keys[i]];
            if (moment(this.data[this.keys[i]], "YYYY-MM-DD", true).isValid()) {
              this.typeOfData[i] = 'date';
            }
          }
        });
        break;
      case 'cars':
        this.carsService.getCarById(1).subscribe(cars => {
          this.data = cars
          this.keys = Object.keys(this.data)

          for (let i = 0; i < this.keys.length; i++) {
            this.typeOfData[i] = typeof this.data[this.keys[i]];
            if (moment(this.data[this.keys[i]], "YYYY-MM-DD", true).isValid()) {
              this.typeOfData[i] = 'date';
            }
          }
        });
        break
    }

  }


}
