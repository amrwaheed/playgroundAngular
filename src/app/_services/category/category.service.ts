import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/_models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseurl:string="http://localhost:5000/api";
  getCategory(){
    
    return this.http.get<Category[]>(this.baseurl+'/playgroundCategories');
  }
  constructor(
    private http:HttpClient
  ) { }
}
