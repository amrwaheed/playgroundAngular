import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user/user.service';
import { OwnerService } from '../_services/owner/owner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService:UserService,
    private ownerService:OwnerService,
    private router : Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean  {
     
      if(this.userService.isLoggedIn() === 'user'){
          this.router.navigateByUrl('/userlogin');
          this.userService.userLogout();
          return false;
      } else if(this.ownerService.isLoggedIn() === 'owner'){
          this.router.navigateByUrl('/ownerlogin');
          this.ownerService.ownerLogout();
          return false;
      }
      

    return true;
  }
  
}
