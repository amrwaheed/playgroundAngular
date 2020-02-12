import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseurl:string="http://localhost:5000/api";

  public registerUser(userObject:User){
    return this.http.post(this.baseurl+'/auth/user/register',userObject);
  }
  public loginUser(email, password){
    let user = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json') 
    return this.http.post(this.baseurl+"/auth/user/login", JSON.stringify(user), {headers: headers})
  }

  constructor(
    private http:HttpClient
  ) { }














































}
