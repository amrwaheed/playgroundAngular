import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Governorate } from 'src/app/_models/governorate/governorate';



@Injectable({
  providedIn: 'root'
})
export class GovernorateService {

  private baseurl:string="http://localhost:5000/api";

  getGovernorate(){
    return this.http.get<Governorate[]>(this.baseurl+'/governorate');
  }







  constructor(
    private http:HttpClient
  ) { }
}
