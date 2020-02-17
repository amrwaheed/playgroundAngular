import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';



import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { City } from 'src/app/_models/city/city';
import { Owner } from 'src/app/_models/owner/owner';

@Component({
  selector: 'app-edit-porfile',
  templateUrl: './edit-porfile.component.html',
  styleUrls: ['./edit-porfile.component.css']
})
export class EditPorfileComponent implements OnInit {
  ownerDetails:Owner = new Owner() ;
  editForm: FormGroup;
  governorates: Governorate[] = [];
  cities: City[] = [];
  isValid: boolean = false;
  imageProfilepre:String;



  get firstName() {
    return this.editForm.get('firstName');
  }

  get lastName() {
    return this.editForm.get('lastName');
  }

  get username() {
    return this.editForm.get('username');
  }

  get email() {
    return this.editForm.get('email');
  }
  get password() {
    return this.editForm.get('password');
  }
  get phone() {
    return this.editForm.get('phone');
  }
  get imageProfile() {
    return this.editForm.get('imageProfile');
  }



  constructor(
    private ownerServeice: OwnerService,
    private router: Router,
    private cityService: CityService,
    private governorateService: GovernorateService
  ) { }
  get_Gov_Cities(event) {

    this.cityService.getCity(event.target.value).subscribe(cityData => {
      this.cities = cityData


    })
  }
  // myImage:ElementRef
  get_Gov_Citiesbyid(id) {
console.log("get gov city",id)
    this.cityService.getCity(id).subscribe(cityData => {
      this.cities = cityData
    
    })
  }
  ngOnInit() {

     // assign governorates data GET
     this.governorateService.getGovernorate().subscribe(governorateData => {
      this.governorates = governorateData
      console.log(governorateData)
    })
    // assign cities data GET
 
    this.editForm = new FormGroup({

      'imageProfile': new FormControl(''),
      'firstName': new FormControl(this.ownerDetails.firstName, [Validators.required]),
      'lastName': new FormControl(this.ownerDetails.lastName, [Validators.required]),
      'username': new FormControl(this.ownerDetails.username, Validators.required),
      'phone': new FormControl(this.ownerDetails.phone, Validators.required), //phone valid 
      "address": new FormGroup({
        "governorate_id": new FormControl(),
        "city_id": new FormControl()
      }),  //create formgroup for Address
     
     
    })

    this.ownerServeice.getOwnerProfile().subscribe(data =>{
      this.ownerDetails = data;
      console.log(  this.ownerDetails)
      this.imageProfilepre = this.ownerDetails.imageProfile
      this.editForm.get("firstName").setValue(this.ownerDetails.firstName);
      this.editForm.get("lastName").setValue(this.ownerDetails.lastName);
      this.editForm.get("username").setValue(this.ownerDetails.username);
      this.editForm.get("phone").setValue(this.ownerDetails.phone);
      this.get_Gov_Citiesbyid(this.ownerDetails.address.governorate_id);
      this.editForm.get("address.governorate_id").setValue(this.ownerDetails.address.governorate_id);
      this.editForm.get("address.city_id").setValue(this.ownerDetails.address.city_id);
      
    })


  }


/**
 * 
 */
uploadFile(event){
  
   // Image Preview
    const file = (event.target as HTMLInputElement).files[0];
    this.editForm.patchValue({
      imageProfile: file
    });
    this.editForm.get('imageProfile').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageProfilepre = reader.result as string;
    }
    reader.readAsDataURL(file);
}

  onSubmit() {

   console.log(this.editForm.value)
   const formData = this.editForm.value
   console.log(formData.address.governorate_id)
    this.ownerServeice.editOwnerProfile(formData['firstName']
                            ,formData['lastName']
                            ,formData['username']
                            ,formData['phone']
                            ,formData.address.governorate_id
                            ,formData.address.city_id
                            ,formData['imageProfile']
                            ).subscribe(result =>{
      console.log( result)
      this.router.navigate(['/ownerProfile'])
    },err=>{
      console.log(err)
    })


  }

  ngDoCheck(): void {

    if (this.editForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }
}
