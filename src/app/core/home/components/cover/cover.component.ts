import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  statusType:string
  constructor(
    private userServices:UserService,
  ) { }

 
  ngOnInit() {
    if(this.userServices.getUserPayLoad() != null){

      this.statusType =  this.userServices.getUserPayLoad().type ;
    }else{
      this.statusType =  "";

    }
     ( this.userServices.getUserPayLoad() )
  }
  
  ngDoCheck(): void {
    if (this.userServices.getUserPayLoad()!= null) {
      if (this.userServices.getUserPayLoad().type == "user") {
          this.statusType = "user"
        } else {
          this.statusType = "owner"

        }
      }
  }
}
