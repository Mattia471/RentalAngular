import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {FormConfig} from "../../util/configCustom/form/config";
import {UsersFormConfig} from "../../util/configCustom/form/usersConfig";
import {CarsFormConfig} from "../../util/configCustom/form/carsConfig";
import {ReservationsService} from "../../util/service/reservations/reservations.service";


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
    public carsService: CarsService,
    public reservationsService: ReservationsService
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


  }

  getClass(): void {
    this.classItems = this.route.snapshot.paramMap.get('class')
  }

  getItem(): void {
    this.itemContent = this.route.snapshot.paramMap.get('obj')
  }


  getStructureAdd(): void {
    switch (this.classItems) {
      case 'users':

        for (let i = 0; i < this.usersPattern.settings.length; i++) {
          this.keyForm[i] = this.usersPattern.settings[i].key
          this.typeOfData[i] = this.usersPattern.settings[i].type
        }

        this.form = new FormGroup({
          id: new FormControl(''),
          name: new FormControl(''),
          surname: new FormControl(''),
          password: new FormControl(''),
          email: new FormControl(''),
          birthdate: new FormControl(''),
          role: new FormControl('CUSTOMER'),
        })

        break;

      case 'cars':

        for (let i = 0; i < this.carsPattern.settings.length; i++) {
          this.keyForm.push(this.carsPattern.settings[i].key)
          this.typeOfData.push(this.carsPattern.settings[i].type)
        }

        this.form = new FormGroup({
          id: new FormControl(''),
          licensePlate: new FormControl(''),
          manufacturer: new FormControl(''),
          model: new FormControl(''),
          type: new FormControl(''),
          year: new FormControl('')
        })

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
            id: new FormControl(users.id),
            name: new FormControl(users.name),
            surname: new FormControl(users.surname),
            password: new FormControl(''),
            email: new FormControl(users.email),
            birthdate: new FormControl(users.birthdate),
            role: new FormControl(users.role),
          })

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
            id: new FormControl(cars.id),
            licensePlate: new FormControl(cars.licensePlate),
            manufacturer: new FormControl(cars.manufacturer),
            model: new FormControl(cars.model),
            type: new FormControl(cars.type),
            year: new FormControl(cars.year)
          })

        });
        break
    }

  }


}
