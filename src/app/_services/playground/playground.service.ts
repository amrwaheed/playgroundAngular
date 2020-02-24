import { Injectable } from '@angular/core';
import { Playground } from 'src/app/_models/playground/playground';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  baseUrl :string= "http://localhost:5000/api/playground";

  /**
   * get all playgrounds for all [user,owner, anonymous]
   */
  getAllPlaygrounds(){ 
    return this.http.get<Playground[]>(this.baseUrl);
  }

  /**
   *  get all Details for playground by playground id for  all [user,owner, anonymous]
   * @param id 
   */
  getPlaygroundDetails(id){
  
    return this.http.get<Playground>(this.baseUrl+"/"+id);
  }

/**
 * get all playground without details for Owner => Node {playgroundrouter.js}
 */
  getPlaygroundbyOwnerId(){
    return this.http.get<Playground[]>(this.baseUrl+'/owner');
  }

/**
 * get all details playground for Owner to Edit by playground Id  => Node {playgroundrouter.js}
 * @param id 
 */
  getPlayground(id){
    return this.http.get(this.baseUrl+'list/owner/'+id)
  }

/**
 *  adding New playground by Owner
 * @param playgroundName 
 * @param dayprice 
 * @param nightprice 
 * @param covered 
 * @param details 
 * @param governorate_id 
 * @param city_id 
 * @param uploadImages 
 * @param category_id 
 */
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


  /**
   * Edit Playground by owner => playgroundrouter.js
   * @param id 
   * @param playgroundName 
   * @param dayprice 
   * @param nightprice 
   * @param covered 
   * @param details 
   * @param governorate_id 
   * @param city_id 
   * @param uploadImages 
   * @param category_id 
   */
  editPlaygroundByOwner(
    _id,
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

    return this.http.put(this.baseUrl+'/'+_id ,dataform)
  }

  constructor( 
    private http:HttpClient
    
    ) { }
  
}
