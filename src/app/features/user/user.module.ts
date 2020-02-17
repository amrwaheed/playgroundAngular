import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './profile/booking/booking.component';
import { UserSliderComponent } from './profile/user-slider/user-slider.component';
import { ProgressBarComponent } from './profile/progress-bar/progress-bar.component';
import { DetailsComponent } from './profile/details/details.component';
import { EditPorfileComponent } from './profile/edit-porfile/edit-porfile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BookingComponent,
    UserSliderComponent,
    ProgressBarComponent,
    DetailsComponent,
    EditPorfileComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
