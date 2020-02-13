import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { City } from 'src/app/_models/city/city';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { CustomValidators } from 'ng2-validation';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  governorates:Governorate [] =[];
  cities:City [] =[];
  isValid:boolean = false;



  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }
 
  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get phone() {
    return this.registerForm.get('phone');
  }


  constructor(
    private ownerServeice:OwnerService,
    private router:Router,
    private cityService:CityService,
    private governorateService:GovernorateService
  ) { }

  get_Gov_Cities(event){
    
    this.cityService.getCity(event.target.value).subscribe(cityData =>{
      this.cities=cityData
     
    })
  }
  ngOnInit() {
      // assign governorates data GET
    this.governorateService.getGovernorate().subscribe(governorateData =>{
      this.governorates=governorateData
      
    })
    // assign cities data GET
   
    
    
    this.registerForm = new FormGroup({
    
      'firstName': new FormControl('', [Validators.required, Validators.min(6)]),
      'lastName': new FormControl('', [Validators.required, Validators.min(6)]),
      'username': new FormControl('', [Validators.required, CustomValidators.phone('zh-CN')]),
      'phone': new FormControl('', Validators.required), //phone valid 
      "address": new FormGroup({
          "governorate_id" : new FormControl(1,Validators.required),
          "city_id" : new FormControl(1,Validators.required)
        }),  //create formgroup for Address
      'email': new FormControl('', [Validators.required, CustomValidators.email]), // email valid 
      'password': new FormControl('', Validators.required),
    })

  }


  onSubmit(){
    console.log(this.registerForm)
    console.log(this.registerForm.value)
    this.registerForm.value.phone = +this.registerForm.value.phone; 
    this.registerForm.value.address.governorate_id = +this.registerForm.value.address.governorate_id; 
    this.registerForm.value.address.city_id = +this.registerForm.value.address.city_id; 
    console.log(this.registerForm.value)
    this.ownerServeice.registerOwner(this.registerForm.value).subscribe(data => {
      console.log(data)
      this.router.navigate(['/ownerProfile'])
    },error=> {console.log(error.error )})
    
 
  }


  ngDoCheck(): void {
   
    if (this.registerForm.valid == true) {
      this.isValid = true
    }else{
      this.isValid = false

    }
  }

}
