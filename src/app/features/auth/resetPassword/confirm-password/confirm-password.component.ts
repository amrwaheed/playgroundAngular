import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  confirmForm: FormGroup;

  // isValid: boolean = false;
  compare: boolean = false;


  constructor() { }

  get newPassword() {
    return this.confirmForm.get('newPassword');
  }

  get confirmPassword() {
    return this.confirmForm.get('confirmPassword');
  }


  ngOnInit() {
    this.confirmForm = new FormGroup({
      "newPassword": new FormControl("", Validators.required),
      "confirmPassword": new FormControl("", Validators.required)
    })

  }

  matched: boolean = false;

  ngDoCheck(): void {
    if (this.confirmForm.controls.newPassword.value == this.confirmForm.controls.confirmPassword.value) {
      this.compare = false;
    } else {
      this.compare = true;
    }
  }

  confirm() {
    console.log(this.confirmForm.controls.newPassword.value)
    console.log(this.confirmForm.controls.confirmPassword.value)
  }



}
