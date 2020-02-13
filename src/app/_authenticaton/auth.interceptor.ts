import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators"
import { from } from 'rxjs';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userService:UserService,
        private router : Router
      ){
    
      }
    intercept(req: HttpRequest<any>,
              next: HttpHandler) {

        const idToken = this.userService.getToken()

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned).pipe(
                tap(
                    event =>{},
                    error =>{
                        if (error.error.auth == false) {
                            this.router.navigateByUrl('/userlogin');
                        }
                    }
                )
            );
        }
        else {
            return next.handle(req);
        }
    }
}