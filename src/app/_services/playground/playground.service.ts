import { Injectable } from '@angular/core';
import { Playground } from 'src/app/_models/playground/playground';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  baseUrl :string= "http://localhost:5000/api/playground";

  getAllPlaygrounds(){
    return this.http.get<Playground[]>(this.baseUrl);
  }

  getPlaygroundDetails(id){
    console.log("id from the playground service =>",id)
    return this.http.get<Playground>(this.baseUrl+"/"+id);
  }
  constructor( 
    private http:HttpClient
    
    ) { }
  
}
