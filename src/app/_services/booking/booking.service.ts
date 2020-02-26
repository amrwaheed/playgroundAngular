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
 * for User-----------------------------------------------------------------------
 */
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
  getBookedHoursByDate(date,playground_id){
    return this.http.get(this.baseUrl+'/date/'+date+'/'+playground_id)
  }


/**
 * get all booking  list for [User]
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


/**
 * 
 * @param playgrounId 
 * @param formData 
 */
  updateBookingByPlaygroundId(playgrounId,formData){
    return this.http.put(this.baseUrl+'/'+playgrounId,formData)
  }

/**
 * 
 * @param bookingId 
 */
  cancelBookingByBookingId(bookingId){
     return  this.http.delete(this.baseUrl+'/'+bookingId)

  }

/**
 * for Owner-----------------------------------------------------------------------
 */
/**
 * get all booking for Owner Playground By Playground_ID
 * @param playgrounId 
 */
getBookingListByPlaygroundId(playgrounId){
  return this.http.get<Booking[]>("http://localhost:5000/api/owner/booking/"+playgrounId)
}







  constructor(
    private http :HttpClient
  ) { }
}
