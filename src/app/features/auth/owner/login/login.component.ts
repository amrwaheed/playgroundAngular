import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  errorMessage: string;

  get email() {
    return this.loginform.get('email')
  }
  get password() {
    return this.loginform.get('password')
  }


  constructor(
    private ownerService: OwnerService,
    private Router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.loginform = new FormGroup({
      'email': new FormControl('', [Validators.required, CustomValidators.email]),
      'password': new FormControl('', [Validators.required])

    });

  }

  savaFormData(formData: FormData) {
    this.ownerService.loginOwner(formData['email'], formData["password"])
      .subscribe(
        result => {
          let results = result['token']
          let toke = JSON.parse(atob(results.split('.')[1]))
          console.log(toke.flag)

          localStorage.setItem("Authorization", result["token"]);
          if (toke.flag == false) {

            // notifiction
            this.toastr.success('Login success!');
            this.Router.navigate(["/ownerProfile"]);
          } else {



            // notifiction
            this.toastr.success('Login success!');
            this.Router.navigate(["/ownerProfile/playgroundList"]);

          }

        },
        error => {
          this.errorMessage = error.error

        })

  }


}
