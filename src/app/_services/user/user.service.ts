import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import { User } from 'src/app/_models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl: string = "http://localhost:5000/api";
  user:string="user"
  public registerUser(userObject: User) {
    return this.http.post(this.baseurl + '/auth/user/register', userObject);
  }


  public loginUser(email: string, password: string) {
    let user = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.post(this.baseurl + "/auth/user/login", JSON.stringify(user), { headers: headers })
  }




  /**
   * // get information for owner 
   */


  getUserProfile() {
    return this.http.get(this.baseurl + "/user/profile");
  }

  getUserProfilepopulate(id) {
    return this.http.get(this.baseurl + `/user/profile/${id}`);
  }




  /**
   * 
   * @param firstName 
   * @param lastName 
   * @param username 
   * @param phone 
   * @param governorate_id 
   * @param city_id 
   * @param imageProfile 
   */
  editUserProfile(firstName: string, lastName: string, username: string, phone: string,
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
    return this.http.put(this.baseurl + "/user/profile", dataform)
  }













  userLogout() {
    localStorage.removeItem('Authorization');
    this.router.navigate(["/"]);
  }


  getToken() {
    return localStorage.getItem('Authorization');
  }

  isLoggedIn() {
    let userPayload = this.getUserPayLoad();
    //  ("payload ", userPayload)
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000
    } else {
      // return {"false":false,"type":userPayload.type};
      return 'user';
    }
  }



  getUserPayLoad() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }














































}
