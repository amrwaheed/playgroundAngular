import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AvailableHours } from 'src/app/_models/availableHours/available-hours';


import { BookingService } from 'src/app/_services/booking/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/_models/booking/booking';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  editBookForm: FormGroup;
  availableHours: AvailableHours[] = [new AvailableHours()]; // hours from collection hours
  bookedHours: any = [-1]; /// hours from collection booking
  bookedObject: Booking = new Booking();

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }




  // get dayValue() {
  //   return moment(this.editBookForm.value.date, 'YYYY-MM-DD')
  // }

  constructor(

    private bookingService: BookingService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.editBookForm = new FormGroup({

      "date": new FormControl(this.bookedObject.date),
      "time": new FormControl(this.bookedObject.time)

    })

    this.activeRoute.params.subscribe(linkRoute => {
      this.bookingService.getBookingById(linkRoute.id).subscribe(bookedData => {
        this.bookedObject = bookedData;
        console.log(this.bookedObject)
        this.editBookForm.get('date').setValue(this.bookedObject.date);
        this.editBookForm.get('time').setValue(this.bookedObject.time);
        // fire getBookedHoursByDate to get the booked hours state from DB
        this.bookingService.getBookedHoursByDate(this.bookedObject.date).subscribe((resultData)=>{
            this.bookedHours = resultData;
            this.bookedHours=  this.bookedHours.map(a=>{
              return a.time
            })
          })

      })
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
    // console.log(event.target.value)
    const currentDate = event.target.value;
    this.bookingService.getBookedHoursByDate(currentDate).subscribe((resultData)=>{
      this.bookedHours = resultData;
      
      this.bookedHours=  this.bookedHours.map(a=>{
        return a.time
      })
      
      console.log("getbookedHoursByDate",this.bookedHours)


    })


  }

  /**
   * check hours available Or Not
   * @param id return true Or False 
   */
  checkBookedHours(id){
    return this.bookedHours.some(ele=>ele === id)
  }


  onSubmit(){
    console.log(this.editBookForm.value)

    this.activeRoute.params.subscribe(linkIdPlayground =>{
      this.bookingService.updateBookingByPlaygroundId(linkIdPlayground.id,this.editBookForm.value).subscribe(updated =>{
        this.router.navigate(['/userProfile/booked/list'])
      })
    })
  }


}
