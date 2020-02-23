import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  errorMessage:string;

  get email() {
    return this.loginform.get('email');
  };
  get password() {
    return this.loginform.get('password')
  }



  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginform = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });

  }
  onSubmit(formData: FormData) {
  
    this.userService.loginUser(formData['email'], formData["password"])
      .subscribe(
        result => {
          let results = result['token'] 
          let toke = JSON.parse(  atob(results.split('.')[1]) )
          localStorage.setItem("Authorization", result["token"]);

          if(toke.flag == false){

            this.router.navigate(["/userProfile"]);
           }else{
             this.router.navigate(["/playground"]);

          }
         
          // localStorage.getItem('Authorization');

          // this.router.navigate(["/userProfile"]);
        },
        error => {
          this.errorMessage = error.error
         
        })
  }


}


