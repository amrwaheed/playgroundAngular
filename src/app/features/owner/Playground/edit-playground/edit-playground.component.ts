import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category/category';
import { City } from 'src/app/_models/city/city';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { CategoryService } from 'src/app/_services/category/category.service';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';
import { Playground } from 'src/app/_models/playground/playground';

@Component({
  selector: 'app-edit-playground',
  templateUrl: './edit-playground.component.html',
  styleUrls: ['./edit-playground.component.css']
})
export class EditPlaygroundComponent implements OnInit {
  imageProfilepre:string;
  playgroundForm: FormGroup ;
  governorates: Governorate[] = [];
  cities: City[] = [];
  categories: Category[] = [];
  isValid: boolean = false;
  playground:Playground = new Playground()

  lat = 40.730610;
  lng = -73.935242;
  location = false;


  onChooseLocation(event)
  {
    console.log(event)
    console.log(event.coords.lat)
    console.log(event.coords.lng)
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  
  constructor(
    private  ownerervice: OwnerService,
    private aroute:ActivatedRoute ,
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

  get_Gov_Citiesbyid(id) {

    this.cityService.getCity(id).subscribe(cityData => {
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
          'playgroundName': new FormControl(this.playground.name, [Validators.required]),
          'dayprice': new FormControl( this.playground.dayPrice , [Validators.required]),
          'nightprice': new FormControl( this.playground.nightPrice , Validators.required),
          'covered': new FormControl(this.playground.covered, Validators.required),
          'details': new FormControl(this.playground.details), 
          "address": new FormGroup({
            "governorate_id": new FormControl(1),
            "city_id": new FormControl()
          }),  //create formgroup for Address
          "category_id": new FormControl(1),
        
        })

        this.aroute.params.subscribe(params=>{
          // console.log("paramemtar",params['id'])
          this.playgroundservice.getPlayground(params.id).subscribe(result =>{
            console.log("obj",result)
            this.playground = result
            this.imageProfilepre = this.playground.uploadImages
            this.playgroundForm.get('playgroundName').setValue(this.playground.name)
            this.playgroundForm.get('dayprice').setValue(this.playground.dayPrice)
            this.playgroundForm.get('nightprice').setValue(this.playground.nightPrice)
            this.playgroundForm.get('covered').setValue(this.playground.covered?"true":"false")
            this.playgroundForm.get('details').setValue(this.playground.details)
            this.get_Gov_Citiesbyid(this.playground.address.governorate_id);
            this.playgroundForm.get('address.governorate_id').setValue(this.playground.address.governorate_id)
            this.playgroundForm.get('address.city_id').setValue(this.playground.address.city_id)
            this.playgroundForm.get('category_id').setValue(this.playground.category_id)
          })
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
    console.log(this.playgroundForm.value);

    //  console.log(formData.address.governorate_id)
    this.aroute.params.subscribe(para =>{
          this.playgroundservice.editPlaygroundByOwner(
            para.id,
            formData['playgroundName']
          ,formData['dayprice']
          ,formData['nightprice']
          ,formData['covered']
          ,formData['details']
          ,formData.address.governorate_id
          ,formData.address.city_id
          ,formData['uploadImages']
          ,formData['category_id']
          ).subscribe(result =>{
      // console.log( result)
      this.router.navigate(['/ownerProfile/playgroundList'])
      },err=>{
      console.log(err)
      })

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
