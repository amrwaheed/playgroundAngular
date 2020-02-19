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
  
    return this.http.get<Playground>(this.baseUrl+"/"+id);
  }



  addPlayground(
    playgroundName:string,
    dayprice:string,
    nightprice:string,
    covered : string,
    details : string,
    governorate_id:string,
    city_id:string,
    uploadImages:File,
    category_id:string

  ){
    let dataform : any = new FormData();
    dataform.append("playgroundName",playgroundName);
    dataform.append("dayprice",dayprice);
    dataform.append("nightprice",nightprice);
    dataform.append("covered",covered);
    dataform.append("details",details);
    dataform.append("governorate_id",governorate_id);
    dataform.append("city_id",city_id);
    
    dataform.append("uploadImages",uploadImages);
    dataform.append("category_id",category_id);
    

    // return false
    return this.http.post(this.baseUrl ,dataform)


  }


  constructor( 
    private http:HttpClient
    
    ) { }
  
}
