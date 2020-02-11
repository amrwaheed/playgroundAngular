import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  get id() {
    return this.registerForm.get('id');
  }

  get fname() {
    return this.registerForm.get('fname');
  }

  get lname() {
    return this.registerForm.get('lname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get phone() {
    return this.registerForm.get('phone');
  }


  constructor() { }

  ngOnInit() {
    
    this.registerForm = new FormGroup({
      'id': new FormControl('', Validators.required), //id vaild 
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required), //phone valid 
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required), // email valid 
      'password': new FormControl('', Validators.required),
    })

  }

}
