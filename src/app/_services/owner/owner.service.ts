import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Owner } from 'src/app/_models/owner/owner';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl: string = "http://localhost:5000/api";

  /**
   * 
   * @param ownerObject 
   */
  registerOwner(ownerObject: Owner) { // register new Owner
    return this.http.post<Owner>(this.baseUrl + '/auth/owner/register', ownerObject);
  }

  /**
   * 
   * @param email 
   * @param password 
   */
  public loginOwner(email, password) {  // login function 
    const owner = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.post(this.baseUrl + "/auth/owner/login", JSON.stringify(owner), { headers: headers })

  }

  /**
   * // get information for owner 
   */
  getOwnerProfile() {
    return this.http.get(this.baseUrl + "/owner/profile");
  }


  getOwnerProfilepopulate(id) {
    return this.http.get(this.baseUrl + `/owner/profile/${id}`);
  }



  /** multipart/form-data
   * Edit function 
   * @param ownerObject 
   */
  editOwnerProfile(firstName: string, lastName: string, username: string, phone: string,
    governorate_id: string, city_id: string, imageProfile: File
  ) {
   
    const dataform = new FormData();

    dataform.append('firstName', firstName)
    dataform.append('lastName', lastName)
    dataform.append('username', username)
    dataform.append('phone', phone)
    dataform.append('governorate_id', governorate_id)
    dataform.append('city_id', city_id)
    dataform.append('imageProfile', imageProfile)

    // ownerObject
    //  ("object sent node ",ownerObject)
    return this.http.put(this.baseUrl + "/owner/profile", dataform)
  }


  //--------------------------------------------------------------------------------

  ownerLogout() {
    localStorage.removeItem('Authorization');
    this.router.navigate(["/"]);
  }


  getToken() {
    return localStorage.getItem('Authorization');
  }

  isLoggedIn() {
    let ownerPayload = this.getOwnerPayLoad();
    if (ownerPayload) {
      return ownerPayload.exp > Date.now() / 1000;
    } else {
      return 'owner';
    }
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

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

}
