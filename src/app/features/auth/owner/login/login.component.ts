import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;


  get email() {
    return this.loginform.get('email')
  }
  get password() {
    return this.loginform.get('password')
  }


  constructor(
    private ownerService: OwnerService,
    private Router: Router
  ) { }

  ngOnInit() {

    this.loginform = new FormGroup({
      'email': new FormControl('', [Validators.required, CustomValidators.email]),
      'password': new FormControl('', [Validators.required, CustomValidators.rangeLength([5, 9])]),

    });

  }

  savaFormData(formData:FormData) {
    this.ownerService.loginOwner(formData['email'], formData["password"])
      .subscribe(
        result => {
          localStorage.setItem("Authorization", result["token"]);
          console.log(result)
          localStorage.getItem('Authorization');
          this.Router.navigate(["/ownerProfile"]);
        },
        error => {
          console.log(error.error);
        })

  }


}
