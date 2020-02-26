import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  baseUrl: string = "http://localhost:5000/api";

  public resetPassword(email,type) {  // login function 
    return this.http.post(this.baseUrl+'/resetPassword',{email, type})
    
  }
  checkCodeAndChangePassword(type:string,verificationCode: string, newPassword: string){
    const dataform : any = new FormData();
    // dataform.append('type',type);
    // dataform.append('verificationCode', verificationCode);
    // dataform.append('newPassword', newPassword);
    return this.http.put(this.baseUrl + "/resetPassword/"+type, {verificationCode,newPassword})
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
