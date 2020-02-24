import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BookingService } from 'src/app/_services/booking/booking.service';
import { Router } from '@angular/router';
import { Booking } from 'src/app/_models/booking/booking';
import { OwnerService } from 'src/app/_services/owner/owner.service';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';
import { Playground } from 'src/app/_models/playground/playground';

import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  isDtInitialized: boolean = false
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};

  bookingList: Booking[] = [];
  playgroundList: Playground[] = [new Playground()];

  constructor(
    private bookingService: BookingService,
    private playgroundService: PlaygroundService,
    private ownerService: OwnerService,
    private router: Router
  ) { }
// show booking data of owner playground in datatable
  show_Booking_Data_In_Playground(event) {
    this.bookingService.getBookingListByPlaygroundId(event.target.value).subscribe(bookingdata => {
      this.bookingList = bookingdata
      if (this.isDtInitialized) {
        this.isDtInitialized = true
        this.dtTrigger.next();
      } else {
        this.rerender()
      }
    })

  }

  ngOnInit() {
    // datatable options
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true
    };
// getting owner Playgrounds in dropdownlist
    this.playgroundService.getPlaygroundbyOwnerId().subscribe(playgroundlistData => {
      this.playgroundList = playgroundlistData
      console.log(this.playgroundList);

    })
  }
// table rerender to retrieve another booking data
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first      
      dtInstance.destroy();
      // Call the dtTrigger to rerender again       
      this.dtTrigger.next();
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
