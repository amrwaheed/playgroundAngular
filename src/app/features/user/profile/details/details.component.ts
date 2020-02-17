import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { User } from 'src/app/_models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  imgSrc: string;
  userData: User = new User();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUserProfilepopulate(1).subscribe(
      response => {
        this.userData = response;
        this.imgSrc = this.userData.imageProfile
      }
      ,
      error => {

        this.router.navigateByUrl('/userlogin')
        this.userData = error.error;

      }
    )

  }

}
