import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService:UserService,
    private router : Router
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      if(!this.userService.isLoggedIn()){
        this.router.navigateByUrl('/login');
        this.userService.userLogout();
        return false;
      }

    return true;
  }
  
}
