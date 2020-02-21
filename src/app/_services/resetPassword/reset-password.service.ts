import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  baseUrl: string = "http://localhost:5000/api";



  public resetPassword(email,type) {  // login function 
    console.log(email)
    console.log(type)
    let object ={
      email,
      type
    }
    return this.http.post(this.baseUrl+'/resetPassword',{email,
      type})
    // const owner = {
    //   email: email
    // }
    // console.log(email)
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    // return this.http.post(this.baseUrl + "/auth/owner", JSON.stringify(owner), { headers: headers })
  }




  getToken() {
    return localStorage.getItem('Authorization');
  }



  getOwnerPayLoad() {
    let token = this.getToken();
    if (token) {
      let ownerPayload = atob(token.split('.')[1]);
      return JSON.parse(ownerPayload);
    } else {
      return null;
    }
  }



  constructor(private http: HttpClient) { }
}
