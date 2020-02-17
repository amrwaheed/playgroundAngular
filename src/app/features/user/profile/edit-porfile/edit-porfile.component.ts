import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';
import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { User } from 'src/app/_models/user/user';
import { City } from 'src/app/_models/city/city';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-porfile',
  templateUrl: './edit-porfile.component.html',
  styleUrls: ['./edit-porfile.component.css']
})
export class EditPorfileComponent implements OnInit {
  userDetails:User = new User() ;
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
    private userService: UserService,
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
      'firstName': new FormControl(this.userDetails.firstName, [Validators.required]),
      'lastName': new FormControl(this.userDetails.lastName, [Validators.required]),
      'username': new FormControl(this.userDetails.username, Validators.required),
      'phone': new FormControl(this.userDetails.phone, Validators.required), //phone valid 
      "address": new FormGroup({
        "governorate_id": new FormControl(),
        "city_id": new FormControl()
      }),  //create formgroup for Address
     
     
    })

    this.userService.getUserProfile().subscribe(data =>{
      this.userDetails = data;
      console.log(  this.userDetails)
      this.imageProfilepre = this.userDetails.imageProfile
      this.editForm.get("firstName").setValue(this.userDetails.firstName);
      this.editForm.get("lastName").setValue(this.userDetails.lastName);
      this.editForm.get("username").setValue(this.userDetails.username);
      this.editForm.get("phone").setValue(this.userDetails.phone);
      this.get_Gov_Citiesbyid(this.userDetails.address.governorate_id);
      this.editForm.get("address.governorate_id").setValue(this.userDetails.address.governorate_id);
      this.editForm.get("address.city_id").setValue(this.userDetails.address.city_id);
      
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
    this.userService.editUserProfile(formData['firstName']
                            ,formData['lastName']
                            ,formData['username']
                            ,formData['phone']
                            ,formData.address.governorate_id
                            ,formData.address.city_id
                            ,formData['imageProfile']
                            ).subscribe(result =>{
      console.log( result)
      this.router.navigate(['/userProfile'])
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
