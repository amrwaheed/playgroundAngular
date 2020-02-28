import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ResetPasswordService } from 'src/app/_services/resetPassword/reset-password.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  isValid: boolean = false;
  errorMessage:string;

  constructor(
    private Http: HttpClient,
    // private ResetPasswordSer: ResetPasswordService,
    private Router: Router,
    private passwordService: ResetPasswordService,
    private toastr: ToastrService


  ) { }

  get email() {
    return this.resetForm.get('email')
  }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'email': new FormControl('', [Validators.required, CustomValidators.email]),
      'type': new FormControl('', [Validators.required]),
    })
  }

  checkEmail(formData: FormData) {
    const email = this.resetForm.controls.email.value;
    const type = this.resetForm.controls.type.value;
    this.passwordService.resetPassword(email,type).subscribe((data) => {
      this.toastr.success(data['message']);
      this.Router.navigate(["/confirmPassword"]);

    },
    error => {
      if(error.status == 400){

        this.errorMessage = error.error
      }else{
        this.errorMessage = error.error.text

      }

    })
  }


  ngDoCheck(): void {

    if (this.resetForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }


}
