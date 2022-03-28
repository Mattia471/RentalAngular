import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  form!:FormGroup;

  constructor(public usersSerice: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  loginProcess(){
    if(this.form.valid){
      this.usersSerice.getUserByEmail(this.form.value.email).subscribe(result =>{
        if(result.length>0){
          alert("ciao");
        }else{
          console.log(result);
          alert("Credenziali errate!");
        }
      })
    }
  }



}
