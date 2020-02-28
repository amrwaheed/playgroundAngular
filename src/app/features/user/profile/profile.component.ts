import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData ;
  constructor(
    private userService: UserService,
    private router :Router 
  ) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      response =>{
        //  (response);
        this.userData = response['User'];
        //this.router.navigateByUrl('/userProfile')
      }
      ,
      error =>{ 
       
        this.router.navigateByUrl('/userlogin')
        this.userData =error.error;

      }
    )
  }

}
