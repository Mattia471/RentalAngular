import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import * as moment from "moment";
import {FormControl, FormGroup} from "@angular/forms";
import {FormConfig} from "../../util/configCustom/form/config";
import {UsersFormConfig} from "../../util/configCustom/form/usersConfig";
import {CarsFormConfig} from "../../util/configCustom/form/carsConfig";


@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  classItems!: any;
  itemContent!: any;
  data!: any[];
  form: any;
  keyForm: any = [];
  typeOfData: any = [];


  usersPattern: FormConfig = UsersFormConfig;
  carsPattern: FormConfig = CarsFormConfig;

  constructor(
    public route: ActivatedRoute,
    public usersService: UsersService,
    public carsService: CarsService
  ) {
  }

  ngOnInit(): void {
    this.getClass()
    this.getItem()

    if (this.itemContent) {
      this.getStructureEdit()
    } else {
      this.getStructureAdd()
    }

    console.log(this.classItems)
    console.log(this.itemContent)

  }

  getClass(): void {
    this.classItems = this.route.snapshot.paramMap.get('class')
  }

  getItem(): void {
    this.itemContent = this.route.snapshot.paramMap.get('obj')
  }




  //TODO SISTEMARE GETUSERBYID FAR RECUPERARE STRUTTURA UTENTE E CARS
  getStructureAdd(): void {
    switch (this.classItems) {
      case 'users':

        for (let i = 0; i < this.usersPattern.settings.length; i++) {
          this.keyForm[i] = this.usersPattern.settings[i].key
          this.typeOfData[i] = this.usersPattern.settings[i].type
        }

        this.form = new FormGroup({
          name: new FormControl(''),
          surname: new FormControl(''),
          email: new FormControl(''),
          birthdate: new FormControl('')
        })

        console.log(this.keyForm, this.typeOfData, this.form)
        break;
      case 'cars':

        for (let i = 0; i < this.carsPattern.settings.length; i++) {
          this.keyForm.push(this.carsPattern.settings[i].key)
          this.typeOfData.push(this.carsPattern.settings[i].type)
        }

        this.form = new FormGroup({
          licenseplate: new FormControl(''),
          manufacturer: new FormControl(''),
          model: new FormControl(''),
          type: new FormControl(''),
          year: new FormControl('')
        })

        console.log(this.keyForm, this.typeOfData, this.form)
        break
    }

  }


  getStructureEdit(): void {
    switch (this.classItems) {
      case 'users':
        this.usersService.getUserById(this.itemContent).subscribe(users => {
          this.data = users
          for (let i = 0; i < this.usersPattern.settings.length; i++) {
            this.keyForm[i] = this.usersPattern.settings[i].key
            this.typeOfData[i] = this.usersPattern.settings[i].type
          }

          this.form = new FormGroup({
            name: new FormControl(users.name),
            surname: new FormControl(users.surname),
            email: new FormControl(users.email),
            birthdate: new FormControl(users.birthdate)
          })

          console.log(this.keyForm, this.typeOfData, this.form)
        });
        break;
      case 'cars':
        this.carsService.getCarById(this.itemContent).subscribe(cars => {
          this.data = cars
          for (let i = 0; i < this.carsPattern.settings.length; i++) {
            this.keyForm.push(this.carsPattern.settings[i].key)
            this.typeOfData.push(this.carsPattern.settings[i].type)
          }

          this.form = new FormGroup({
            licenseplate: new FormControl(cars.licenseplate),
            manufacturer: new FormControl(cars.manufacturer),
            model: new FormControl(cars.model),
            type: new FormControl(cars.type),
            year: new FormControl(cars.year)
          })

          console.log(this.keyForm, this.typeOfData, this.form, this.data)
        });
        break
    }

  }


}
