import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { Owner } from 'src/app/_models/owner/owner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ownerData :Owner = new Owner() ;
  constructor(
    private ownerervice: OwnerService,
    private router :Router
  ) { }

  ngOnInit() {
    this.ownerervice.getOwnerProfile().subscribe(
      response =>{
        console.log(response);
        this.ownerData = response;
        //this.router.navigateByUrl('/userProfile')
      }
      ,
      error =>{ 
        console.log(error)
        this.router.navigateByUrl('/ownerlogin')
        this.ownerData =error.error;

      }
    )

  }

}
