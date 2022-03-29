import {Component, OnInit} from '@angular/core';
import {FormConfig} from "../../util/configCustom/form/config";
import {UsersFormConfig} from "../../util/configCustom/form/usersConfig";
import {CarsFormConfig} from "../../util/configCustom/form/carsConfig";
import {ReservationsFormConfig} from "../../util/configCustom/form/reservationsConfig";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../util/service/authentication/auth.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  classItems!: any;
  itemContent!: any;
  data!: any[];
  form: any;
  keyForm: any = [];
  typeOfData: any = [];


  usersPattern: FormConfig = UsersFormConfig;
  carsPattern: FormConfig = CarsFormConfig;
  reservationsPattern: FormConfig = ReservationsFormConfig;

  constructor(
    public route: ActivatedRoute,
    public usersService: UsersService,
    public carsService: CarsService,
    public reservationsService: ReservationsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getItem()
    this.getStructureEdit()
    console.log(this.itemContent)
  }


  getItem(): void {
    this.itemContent = this.authService.getUser()?.id
  }


  getStructureEdit(): void {
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
  }
}
