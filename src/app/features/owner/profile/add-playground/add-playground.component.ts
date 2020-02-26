import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { City } from 'src/app/_models/city/city';
import { Owner } from 'src/app/_models/owner/owner';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';
import { Category } from 'src/app/_models/category/category';
import { CategoryService } from 'src/app/_services/category/category.service';

@Component({
  selector: 'app-add-playground',
  templateUrl: './add-playground.component.html',
  styleUrls: ['./add-playground.component.css']
})
export class AddPlaygroundComponent implements OnInit {

  imageProfilepre:string;
  playgroundForm: FormGroup;
  governorates: Governorate[] = [];
  cities: City[] = [];
  categories: Category[] = [];
  isValid: boolean = false;
  viewmap:boolean = false;

  lat; //= 40.730610;
  lng; //= -73.935242;
  location = true;
  err;
   getlocationdata() {
     event.preventDefault()
    //1- check availablity
    if(navigator.geolocation)
    {
        // 2- get permission
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position)
          this.viewmap = true
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log( this.lat)
          console.log(this.lng)
        });
    }
    else {
      this.err= "Update Your Browser , and Try Again !";
    }
}


  onChooseLocation(event)
  {
     
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  constructor(
    private  ownerervice: OwnerService,
    private  playgroundservice:PlaygroundService,
    private  router :Router,
    private  cityService: CityService,
    private  governorateService: GovernorateService,
    private  categoryService:CategoryService
  ) { }


  get_Gov_Cities(event) {

    this.cityService.getCity(event.target.value).subscribe(cityData => {
      this.cities = cityData

    })
  }
 

  get playgroundName() {
    return this.playgroundForm.get('playgroundName');
  }

  get dayprice() {
    return this.playgroundForm.get('dayprice');
  }

  get nightprice() {
    return this.playgroundForm.get('nightprice');
  }

  get covered() {
    return this.playgroundForm.get('covered');
  }
  get details() {
    return this.playgroundForm.get('details');
  }
 

  ngOnInit() {
        this.categoryService.getCategory().subscribe((categoryData)=>{
           
          this.categories = categoryData
        })

        // assign governorates data GET
        this.governorateService.getGovernorate().subscribe(governorateData => {
          this.governorates = governorateData

        })
        // assign cities data GET

        this.playgroundForm = new FormGroup({

          'uploadImages': new FormControl(""),
          'playgroundName': new FormControl("", [Validators.required]),
          'dayprice': new FormControl( 0 , [Validators.required]),
          'nightprice': new FormControl( 0 , Validators.required),
          'covered': new FormControl("covered", Validators.required),
          'details': new FormControl(""), 
          "address": new FormGroup({
            "governorate_id": new FormControl(1),
            "city_id": new FormControl()
          }),  //create formgroup for Address
          "category_id": new FormControl(1),
        
        })



  }

  uploadFile(event){
  
    // Image Preview
     const file = (event.target as HTMLInputElement).files[0];
     this.playgroundForm.patchValue({
      uploadImages: file
     });
     this.playgroundForm.get('uploadImages').updateValueAndValidity();
 
     // File Preview
     const reader = new FileReader();
     reader.onload = () => {
       this.imageProfilepre = reader.result as string;
     }
     reader.readAsDataURL(file);
 }

  onSubmit(){
    const formData = this.playgroundForm.value
     
    const lat = this.lat;
    const lng = this.lng;
 
    this.playgroundservice.addPlayground(
              formData['playgroundName']
            ,formData['dayprice']
            ,formData['nightprice']
            ,formData['covered']
            ,formData['details']
            ,formData.address.governorate_id
            ,formData.address.city_id
            ,formData['uploadImages']
            ,formData['category_id']
            ,lat
            ,lng
            ).subscribe(result =>{
        //  
        this.router.navigate(['/ownerProfile/playgroundList'])
        },err=>{
         
        })





  }


  ngDoCheck(): void {

    if (this.playgroundForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }

}
