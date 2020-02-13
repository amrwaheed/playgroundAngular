import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Owner } from 'src/app/_models/owner/owner';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl :string = "http://localhost:5000/api/" ;

  registerOwner( ownerObject:Owner ){

   return this.http.post<Owner>(this.baseUrl+'auth/owner/register',ownerObject);
   
  }


  constructor( private http:HttpClient) { }
}
