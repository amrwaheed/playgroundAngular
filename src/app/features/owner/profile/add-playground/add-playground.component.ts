import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { CityService } from 'src/app/_services/city/city.service';
import { GovernorateService } from 'src/app/_services/governorate/governorate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Governorate } from 'src/app/_models/governorate/governorate';
import { City } from 'src/app/_models/city/city';
import { Owner } from 'src/app/_models/owner/owner';

@Component({
  selector: 'app-add-playground',
  templateUrl: './add-playground.component.html',
  styleUrls: ['./add-playground.component.css']
})
export class AddPlaygroundComponent implements OnInit {


  playgroundForm: FormGroup;
  governorates: Governorate[] = [];
  cities: City[] = [];
  isValid: boolean = false;



  constructor(
    private ownerervice: OwnerService,
    private router :Router,
    private cityService: CityService,
    private governorateService: GovernorateService
  ) { }


  get_Gov_Cities(event) {

    this.cityService.getCity(event.target.value).subscribe(cityData => {
      this.cities = cityData

    })
  }
  // get_Gov_Citiesbyid(id) {

  //   this.cityService.getCity(id).subscribe(cityData => {
  //     this.cities = cityData

  //   })
  // }

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


        // assign governorates data GET
        this.governorateService.getGovernorate().subscribe(governorateData => {
          this.governorates = governorateData

        })
        // assign cities data GET

        this.playgroundForm = new FormGroup({

          'imageProfile': new FormControl(""),
          'playgroundName': new FormControl("", [Validators.required]),
          'dayprice': new FormControl( 0 , [Validators.required]),
          'nightprice': new FormControl( 0 , Validators.required),
          'covered': new FormControl("covered", Validators.required),
          'details': new FormControl(""), 
          "address": new FormGroup({
            "governorate_id": new FormControl(1),
            "city_id": new FormControl()
          }),  //create formgroup for Address
        
        
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
