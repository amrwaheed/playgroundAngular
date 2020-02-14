import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Owner } from 'src/app/_models/owner/owner';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl :string = "http://localhost:5000/api" ;

  registerOwner( ownerObject:Owner ){ // register new Owner

   return this.http.post<Owner>(this.baseUrl+'/auth/owner/register',ownerObject);
   
  }

  public loginOwner(email, password) {  // login function 
    const owner = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.post(this.baseUrl + "/auth/owner/login", JSON.stringify(owner), { headers: headers })

  }


  getOwnerProfile(){ // get information for owner 
    return this.http.get(this.baseUrl+"/owner/profile");
  }


  editOwnerProfile( ownerObject:Owner){
    return this.http.put(this.baseUrl+"/owner/profile",ownerObject)
  }





  ownerLogout(){
    localStorage.removeItem('Authorization');
    this.router.navigate(["/"]);
  }


  getToken(){
    return localStorage.getItem('Authorization');
  }

  isLoggedIn(){
    let ownerPayload = this.getOwnerPayLoad();
    if (ownerPayload) {
      return ownerPayload.exp > Date.now() / 1000;
    }else{
      return 'owner';
    }
  }



  getOwnerPayLoad(){
    let token = this.getToken();
    if (token) {
        let ownerPayload = atob(token.split('.')[1]);
        return JSON.parse(ownerPayload);
    }else{
      return null;
    } 
  }
  
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }



}
