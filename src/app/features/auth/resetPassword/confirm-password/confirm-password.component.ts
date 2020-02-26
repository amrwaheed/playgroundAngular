import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ResetPasswordService } from 'src/app/_services/resetPassword/reset-password.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  isValid: boolean = false;
  errorMessage:string;

  confirmForm: FormGroup;

  matched: boolean = false;
  compare: boolean = false;


  constructor(
    private Http: HttpClient,
    private Router: Router,
    private passwordService: ResetPasswordService
  ) {}

  get newPassword() {
    return this.confirmForm.get('newPassword');
  }

  get confirmPassword() {
    return this.confirmForm.get('confirmPassword');
  }
  get verificationCode() {
    return this.confirmForm.get('verificationCode');
  }


  ngOnInit() {
    this.confirmForm = new FormGroup({
      "newPassword": new FormControl("", Validators.required),
      "confirmPassword": new FormControl("", Validators.required),
      "verificationCode": new FormControl("", Validators.required),
      "type": new FormControl("",Validators.required)

    })
  }




  ngDoCheck(): void {
    if (this.confirmForm.controls.newPassword.value == this.confirmForm.controls.confirmPassword.value) {
      this.compare = false;
    } else {
      this.compare = true;
    }
  }

  confirm(formData: FormData) {
    const type = this.confirmForm.controls.type.value;
    const verificationCode = this.confirmForm.controls.verificationCode.value;
    const newPassword = this.confirmForm.controls.newPassword.value;

    this.passwordService.checkCodeAndChangePassword(type,verificationCode,newPassword).subscribe((data) => {
      this.Router.navigate(['/'])
      console.log(data)
    })
    // console.log(this.confirmForm.controls.newPassword.value)
    // console.log(this.confirmForm.controls.confirmPassword.value)
  }
}
