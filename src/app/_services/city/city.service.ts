import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/_models/city/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseurl:string="http://localhost:5000/api";

  getCity(id){
    return this.http.get<City[]>(this.baseurl+'/cities/'+id);
  }

  constructor(private http:HttpClient) { }
}
