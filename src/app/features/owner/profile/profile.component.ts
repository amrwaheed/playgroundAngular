import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(
    private ownerervice: OwnerService,
    private router :Router 
  ) { }

  ngOnInit() {

    // this.ownerervice.getOwnerProfile().subscribe(
    //   response =>{
    //     console.log(response);
    //     this.ownerData = response['Owner'];
    //     //this.router.navigateByUrl('/userProfile')
    //   }
    //   ,
    //   error =>{ 
    //     console.log(error)
    //     this.router.navigateByUrl('/ownerlogin')
    //     this.ownerData =error.error;

    //   }
    // )

  }

}
