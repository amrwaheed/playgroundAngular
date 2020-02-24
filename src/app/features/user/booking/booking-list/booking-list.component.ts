import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/_services/booking/booking.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/_models/booking/booking';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  bookingList:Booking [] = [];

 
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private bookingService: BookingService,
    private router:Router
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };


    this.bookingService.getBookingList().subscribe(bookingData =>{
      this.bookingList = bookingData
      console.log( this.bookingList)
this.dtTrigger.next();
    })


  }

  ngOnDestroy (): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  cancelBooking(BookingId,index){
    console.log(index)
    this.bookingService.cancelBookingByBookingId(BookingId).subscribe(deletedrecord=>{
      console.log(deletedrecord)
      this.bookingList.splice(index,1)
    })
  }

  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }

}
