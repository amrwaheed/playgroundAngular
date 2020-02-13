import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseurl:string="http://localhost:5000/api";

  registerUser(userObject:User){
    return this.http.post(this.baseurl+'/auth/user/register',userObject);
  }














  constructor(
    private http:HttpClient
  ) { }














































}
