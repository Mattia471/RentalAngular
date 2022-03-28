import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import * as moment from "moment";
import {FormControl, FormGroup} from "@angular/forms";
import {FormConfig} from "../../util/configCustom/form/config";
import {UsersFormConfig} from "../../util/configCustom/form/usersConfig";
import {CarsFormConfig} from "../../util/configCustom/form/carsConfig";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {ReservationsFormConfig} from "../../util/configCustom/form/reservationsConfig";


@Component({
  selector: 'app-page-form-reservations',
  templateUrl: './page-form-reservations.component.html',
  styleUrls: ['./page-form-reservations.component.css']
})
export class PageFormReservationsComponent implements OnInit {

  classItems!: any;
  itemContent!: any;
  data!: any[];
  form: any;
  keyForm: any = [];
  typeOfData: any = [];
  carsAvailable: any = [];


  usersPattern: FormConfig = UsersFormConfig;
  carsPattern: FormConfig = CarsFormConfig;
  reservationsPattern: FormConfig = ReservationsFormConfig;

  constructor(
     public route: ActivatedRoute,
     public usersService: UsersService,
     public carsService: CarsService,
     public reservationsService : ReservationsService
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




  getStructureAdd(): void {
        for (let i = 0; i < this.reservationsPattern.settings.length; i++) {
          this.keyForm.push(this.reservationsPattern.settings[i].key)
          this.typeOfData.push(this.reservationsPattern.settings[i].type)
        }

        this.form = new FormGroup({
          carId: new FormControl(''),
          startDate: new FormControl(''),
          endDate: new FormControl(''),
          status: new FormControl('IN ATTESA'),
        })

        console.log(this.keyForm, this.typeOfData, this.form)
  }


  getStructureEdit(): void {
        this.reservationsService.getReservationById(this.itemContent).subscribe(reservations => {
          this.data = reservations
          for (let i = 0; i < this.reservationsPattern.settings.length; i++) {
            this.keyForm[i] = this.reservationsPattern.settings[i].key
            this.typeOfData[i] = this.reservationsPattern.settings[i].type
          }

          this.form = new FormGroup({
            carId: new FormControl(reservations.carId),
            startDate: new FormControl(reservations.startDate),
            endDate: new FormControl(reservations.endDate),
          })

          console.log(this.keyForm, this.typeOfData, this.form)
        });
  }


}
