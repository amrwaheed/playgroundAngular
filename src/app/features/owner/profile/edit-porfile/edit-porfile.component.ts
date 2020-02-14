import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {

     // assign governorates data GET
     this.governorateService.getGovernorate().subscribe(governorateData => {
      this.governorates = governorateData

    })
    // assign cities data GET
 
    this.editForm = new FormGroup({

      'imageProfile': new FormControl(""),
      'firstName': new FormControl(this.ownerDetails.firstName, [Validators.required]),
      'lastName': new FormControl(this.ownerDetails.lastName, [Validators.required]),
      'username': new FormControl(this.ownerDetails.userName, Validators.required),
      'phone': new FormControl(this.ownerDetails.phone, Validators.required), //phone valid 
      "address": new FormGroup({
        "governorate_id": new FormControl(),
        "city_id": new FormControl()
      }),  //create formgroup for Address
     
      // 'password': new FormControl(this.ownerDetails.password, Validators.required),
    })

    this.ownerServeice.getOwnerProfile().subscribe(data =>{
      console.log(data)
      this.ownerDetails = data;
      
      this.editForm.get("firstName").setValue(this.ownerDetails.firstName);
      this.editForm.get("lastName").setValue(this.ownerDetails.lastName);
      this.editForm.get("username").setValue(this.ownerDetails.username);
      this.editForm.get("phone").setValue(this.ownerDetails.phone);

console.log(this.editForm)
      this.editForm.get("address.governorate_id").setValue(this.ownerDetails.address.governorate_id._id);
      this.editForm.get("address.city_id").setValue(this.ownerDetails.address.city_id._id);
      
    })


  }

  onSubmit() {

    console.log(this.editForm.value)
   
    this.ownerServeice.editOwnerProfile(this.editForm.value).subscribe(reault =>{
      this.router.navigate(['/ownerProfile'])
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
