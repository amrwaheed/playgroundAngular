import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableHours } from 'src/app/_models/availableHours/available-hours';
import { Booking } from 'src/app/_models/booking/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl :string= "http://localhost:5000/api/user/booking";
  

  getAvailableHours(){
    return this.http.get<AvailableHours[]>('http://localhost:5000/api/availablehours')
  }

  /**
   * 
   * @param id 
   * @param data 
   */
  bookingAdd(id, data){
    return this.http.post(this.baseUrl+'/'+id ,data)
  }


  /**
   * 
   * @param date \
   */
  getBookedHoursByDate(date){
    return this.http.get(this.baseUrl+'/date/'+date)
  }


/**
 * get all booking 
 */
  getBookingList(){
    return this.http.get<Booking[]>(this.baseUrl)
  }

/**
 *  get booking Data By Id To Update Booking 
 * @param bookingID 
 */
  getBookingById(bookingID){
      return  this.http.get<Booking>(this.baseUrl+'/'+bookingID);
  }



  updateBookingByPlaygroundId(playgrounId,formData){
    return this.http.put(this.baseUrl+'/'+playgrounId,formData)
  }


  cancelBookingByBookingId(bookingId){
     return  this.http.delete(this.baseUrl+'/'+bookingId)

  }

  constructor(
    private http :HttpClient
  ) { }
}
