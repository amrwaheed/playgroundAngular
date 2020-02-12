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

  get email() {
    return this.loginform.get('email');
  };
  get password() {
    return this.loginform.get('password');     
  };
  
  constructor(
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });

  }
  // form submitting & checking received data from loginform
  onSubmit(){
    this.userService.loginUser(this.loginform.controls.email.value, this.loginform.controls.password.value)
    .subscribe(
        result => {
        this.router.navigate(["/userProfile"]);
        },
        error=>{
          console.log(error.error);
        })
    }


} 
