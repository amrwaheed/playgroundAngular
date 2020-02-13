import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './profile/booking/booking.component';
import { UserSliderComponent } from './profile/user-slider/user-slider.component';
import { ProgressBarComponent } from './profile/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BookingComponent,
    UserSliderComponent,
    ProgressBarComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
   
  ]
})
export class UserModule { }
