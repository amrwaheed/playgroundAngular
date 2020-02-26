import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUs:FormGroup;
  constructor(
    private http:HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.contactUs = new FormGroup({
      "name":new FormControl(),
      "email":new FormControl(),
      "subject":new FormControl(),
      "message":new FormControl()
    })
  }
  private baseurl:string="http://localhost:5000/api";

  onSubmit(){
 
    this.http.post(this.baseurl+'/contactus',this.contactUs.value).subscribe(result=>{
      this.toastr.success('Message Send Success!');
      this.contactUs.reset()
    })

  }

}
