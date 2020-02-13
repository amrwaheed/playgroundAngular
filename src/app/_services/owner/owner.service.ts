import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Owner } from 'src/app/_models/owner/owner';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl :string = "http://localhost:5000/api/" ;

  registerOwner( ownerObject:Owner ){

   return this.http.post<Owner>(this.baseUrl+'auth/owner/register',ownerObject);
   
  }

  public loginOwner(email, password) {
    const owner = {
      email: email,
      password: password
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.post(this.baseUrl + "/auth/owner/login", JSON.stringify(owner), { headers: headers })

  }


  constructor( private http:HttpClient) { }
}
