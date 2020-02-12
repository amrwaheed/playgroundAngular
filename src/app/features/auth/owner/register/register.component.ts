import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
      'id': new FormControl('', [Validators.required, CustomValidators.number]),
      'fname': new FormControl('', [Validators.required, Validators.min(6)]),
      'lname': new FormControl('', [Validators.required, Validators.min(6)]),
      'phone': new FormControl('', [Validators.required, CustomValidators.phone('zh-CN')]),
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, CustomValidators.email]),
      'password': new FormControl('', Validators.required)

    })


  }

}
