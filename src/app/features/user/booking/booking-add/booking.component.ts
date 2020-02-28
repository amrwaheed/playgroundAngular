import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category/category.service';
import { Category } from 'src/app/_models/category/category';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { BookingService } from 'src/app/_services/booking/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableHours } from 'src/app/_models/availableHours/available-hours';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  isValid: boolean = false;
  minDate: Date = new Date();
  
  maxDate: Date;

  availableHours: AvailableHours[] = [new AvailableHours()]; // hours from collection hours
  bookedHours :any = [-1]; /// hours from collection booking
  categories: Category[] = [];
  bookForm: FormGroup;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }




  get dayValue() {
    return moment(this.bookForm.value.date).format('YYYY-MM-DD')
  }

  constructor(
    private categoryService: CategoryService,
    private bookingService: BookingService,
    private activeRoute: ActivatedRoute,
    private router:Router
  ) {

    const currentYear = new Date().getFullYear();
    this.minDate.setDate(this.minDate.getDate() );
 
    this.maxDate = new Date(currentYear + 1, 11, 31);

   }

  ngOnInit() {
    this.categoryService.getCategory().subscribe((categoryData) => {
      this.categories = categoryData
    })

    this.bookForm = new FormGroup({
      "date": new FormControl("",Validators.required),
      "time": new FormControl("",Validators.required),
    })
/**\
 * get all hours from collection availableHours
 */
    this.bookingService.getAvailableHours().subscribe(result => {
      this.availableHours = result;
    })
  }

/**
 * 
 * @param event 
 */
  get_Booked_Hours_By_Date(event) {
    console.log(this.dayValue)
    const currentDate = event.target.value;

    
    this.activeRoute.params.subscribe(playground_id =>{
      this.bookingService.getBookedHoursByDate(this.dayValue, playground_id.id).subscribe((resultData)=>{
        this.bookedHours = resultData;
        
        this.bookedHours=  this.bookedHours.map(a=>{
          return a.time
        })
        
        console.log("getbookedHoursByDate",this.bookedHours)
  
  
      })
    })
  


  }
/**
 * check hours available Or Not
 * @param id return true Or False 
 */
  checkBookedHours(id){
    return this.bookedHours.some(ele=>ele === id)
  }


  onSubmit() {

    
    console.log(this.dayValue)

    this.activeRoute.params.subscribe(alink => {
      this.bookForm.value.date= this.dayValue
      this.bookingService.bookingAdd(alink.id, this.bookForm.value).subscribe(result => {
        console.log(result)
          // this.bookForm.reset()
          this.router.navigate(['/userProfile/booked/list'])
      },
        err => {
          console.log(err)
        })
    })

  }

  ngDoCheck(): void {

    if (this.bookForm.valid == true) {
      this.isValid = true
    } else {
      this.isValid = false

    }
  }

}



