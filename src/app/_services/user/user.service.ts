import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import { User } from 'src/app/_models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl:string="http://localhost:5000/api";

  public registerUser(userObject:User){
    return this.http.post(this.baseurl+'/auth/user/register',userObject);
  }


  public loginUser(email:string, password:string){
    let user = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json') 
    return this.http.post(this.baseurl+"/auth/user/login", JSON.stringify(user), {headers: headers})
  }


  getUserProfile(){
    return this.http.get(this.baseurl+"/user/profile");
  }

  userLogout(){
    localStorage.removeItem('Authorization');
    this.router.navigate(["/"]);
  }


  getToken(){
    return localStorage.getItem('Authorization');
  }

  isLoggedIn(){
    let userPayload = this.getUserPayLoad();
    // console.log("payload ", userPayload)
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000
    }else{
      // return {"false":false,"type":userPayload.type};
      return 'user';
    }
  }



  getUserPayLoad(){
    let token = this.getToken();
    if (token) {
        let userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
    }else{
      return null;
    } 
  }
  
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }














































}
