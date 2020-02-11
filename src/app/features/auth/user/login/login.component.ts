import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;


  get username() {
    return this.loginform.get('username')
  }
  get password() {
    return this.loginform.get('password')
  }



  savaFormData() {
 
    console.log(this.loginform.value)
  }

  constructor() { }

  ngOnInit() {

    this.loginform = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.maxLength(5)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(5)]),
    });

  }

}
