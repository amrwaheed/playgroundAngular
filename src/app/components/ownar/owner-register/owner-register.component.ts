import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})
export class OwnerRegisterComponent implements OnInit {
  ownarform: FormGroup;


  get id() {
    return this.ownarform.get('id');
  }

  get fname() {
    return this.ownarform.get('fname');
  }

  get lname() {
    return this.ownarform.get('lname');
  }
  get email() {
    return this.ownarform.get('email');
  }
  get password() {
    return this.ownarform.get('password');
  }
  get phone() {
    return this.ownarform.get('phone');
  }


  constructor() { }

  ngOnInit() {
    this.ownarform = new FormGroup({
      'id': new FormControl('', Validators.required), //id vaild 
      'fname': new FormControl('', [Validators.required,Validators.min(4)]),
      'lname': new FormControl('',[Validators.required,Validators.min(4)]),
      'phone': new FormControl('', Validators.required), //phone valid 
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required,Validators.min(4)]), // email valid 
      'password': new FormControl('', Validators.required)

    })
  }

}
